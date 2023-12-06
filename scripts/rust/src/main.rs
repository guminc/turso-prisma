use dotenv::dotenv;
use libsql_client;
use std::env;
use std::fs;
use url;

fn split_sql_commands(sql: &str) -> Vec<String> {
    sql.split("INSERT INTO")
        .filter(|cmd| !cmd.trim().is_empty())
        .map(|cmd| format!("INSERT INTO {}", cmd))
        .collect()
}

#[tokio::main]
async fn main() {
    dotenv().ok();

    // Check command-line arguments for the --local-db flag
    let use_local_db = env::args().any(|arg| arg == "--local-db");

    let (url, auth_token);
    if use_local_db {
        let current_dir = env::current_dir().expect("Failed to get current directory");
        let db_path = current_dir.join("prisma/dev.db");
        url = format!("file:////{}",db_path.to_str().expect("Failed to convert path to string"));
        auth_token = None;
        println!("Using local db: {}", url);
    } else {
        url = env::var("TURSO_DATABASE_URL").expect("TURSO_DATABASE_URL is not set in .env");
        auth_token = Some(env::var("TURSO_AUTH_TOKEN").expect("TURSO_AUTH_TOKEN is not set in .env"));
        println!("Using production db: {}", url);
    }


    let client = libsql_client::Client::from_config(libsql_client::Config {
        url: url::Url::parse(&url).unwrap(),
        auth_token,
    })
    .await
    .unwrap();

    // The batch file path should be the first argument after any flags
    let batch_file_path = env::args().skip_while(|arg| arg.starts_with("--")).nth(1)
        .expect("No batch file path provided");
    let batch_commands = fs::read_to_string(batch_file_path).expect("Failed to read batch file");

    let commands = split_sql_commands(&batch_commands);
    println!("Sending SQL batch");
    match client.batch(commands).await {
        Ok(_) => println!("Batch executed successfully"),
        Err(e) => eprintln!("Error executing batch: {}", e),
    }
}
