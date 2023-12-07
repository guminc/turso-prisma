use dotenv::dotenv;
use libsql_client;
use napi::bindgen_prelude::*;
use napi_derive::napi;
use std::env;
use std::fs;
use url;

#[napi]
async fn execute_batch(batch_file_path: String, use_local_db: bool) -> Result<u32> {
    dotenv().ok();

    let db_url = if use_local_db {
        let current_dir = env::current_dir().map_err(|e| {
            Error::new(
                Status::GenericFailure,
                format!("Failed to get current directory: {}", e),
            )
        })?;
        let db_path = current_dir.join("prisma/dev.db");
        format!(
            "file:////{}",
            db_path.to_str().ok_or_else(|| Error::new(
                Status::GenericFailure,
                "Failed to convert path to string".to_owned()
            ))?
        )
    } else {
        env::var("TURSO_DATABASE_URL").map_err(|_| {
            Error::new(
                Status::GenericFailure,
                "TURSO_DATABASE_URL is not set in .env".to_owned(),
            )
        })?
    };

    let auth_token = if use_local_db {
        None
    } else {
        Some(env::var("TURSO_AUTH_TOKEN").map_err(|_| {
            Error::new(
                Status::GenericFailure,
                "TURSO_AUTH_TOKEN is not set in .env".to_owned(),
            )
        })?)
    };

    let client = libsql_client::SyncClient::from_config(libsql_client::Config {
        url: url::Url::parse(&db_url)
            .map_err(|_| Error::new(Status::GenericFailure, "Failed to parse URL".to_owned()))?,
        auth_token,
    })
    .map_err(|_| Error::new(Status::GenericFailure, "Failed to create client".to_owned()))?;

    let batch_commands = fs::read_to_string(&batch_file_path).map_err(|e| {
        Error::new(
            Status::GenericFailure,
            format!("Failed to read batch file: {}", e),
        )
    })?;

    let commands: Vec<&str> = batch_commands
        .split(';')
        .filter(|cmd| !cmd.is_empty())
        .collect();

    client.batch(&commands).map_err(|e| {
        Error::new(
            Status::GenericFailure,
            format!("Error executing batch: {}", e),
        )
    })?;

    Ok(0)
}
