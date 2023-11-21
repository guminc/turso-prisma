use dotenv::dotenv;
use libsql_client;
use std::env;
use std::fs;
use url;

#[tokio::main]
async fn main() {
    dotenv().ok();

    let url = env::var("TURSO_DATABASE_URL").expect("TURSO_DATABASE_URL is not set in .env");
    let auth_token = env::var("TURSO_AUTH_TOKEN").expect("TURSO_AUTH_TOKEN is not set in .env");

    let client = libsql_client::Client::from_config(libsql_client::Config {
        url: url::Url::parse(&url).unwrap(),
        auth_token: Some(auth_token),
    })
    .await
    .unwrap();

    let batch_file_path = env::args().nth(1).expect("No batch file path provided");
    let batch_commands = fs::read_to_string(batch_file_path).expect("Failed to read batch file");

    let commands: Vec<&str> = batch_commands.split(';').filter(|cmd| !cmd.is_empty()).collect();

    println!("{}", "sending sql batch");
    match client.batch(&commands).await {
        Ok(_) => println!("Batch executed successfully"),
        Err(e) => eprintln!("Error executing batch: {}", e),
    }
}
