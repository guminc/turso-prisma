use dotenv::dotenv;
use libsql_client;
use napi::bindgen_prelude::*;
use napi_derive::napi;
use std::env;
use std::fs;
use url;

fn split_sql_commands(sql: &str) -> Vec<String> {
    sql.split("INSERT INTO")
        .filter(|cmd| !cmd.trim().is_empty())
        .map(|cmd| format!("INSERT INTO {}", cmd))
        .collect()
}

#[napi]
async fn execute_batch(batch_file_path: String, use_local_db: bool) -> Result<u32> {
    dotenv().ok();

    let (db_url, auth_token);
    if use_local_db {
        let current_dir = env::current_dir().expect("Failed to get current directory");
        let db_path = current_dir.join("prisma/dev.db");
        db_url = format!(
            "file:////{}",
            db_path.to_str().expect("Failed to convert path to string")
        );
        auth_token = None;
        println!("Using local db: {}", db_url);
    } else {
        db_url = env::var("TURSO_DATABASE_URL").expect("TURSO_DATABASE_URL is not set in .env");
        auth_token =
            Some(env::var("TURSO_AUTH_TOKEN").expect("TURSO_AUTH_TOKEN is not set in .env"));
        println!("Using production db: {}", db_url);
    }

    let client = libsql_client::SyncClient::from_config(libsql_client::Config {
        url: url::Url::parse(&db_url).expect("Failed to parse URL"),
        auth_token,
    })
    .expect("Failed to create client");

    let batch_commands = fs::read_to_string(batch_file_path).expect("Failed to read batch file");
    let commands = split_sql_commands(&batch_commands);

    println!("Sending SQL batch");

    client.batch(commands).map_err(|e| {
        Error::new(
            Status::GenericFailure,
            format!("Error executing batch: {}", e),
        )
    })?;

    Ok(0)
}
