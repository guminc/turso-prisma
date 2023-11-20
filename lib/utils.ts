export function parseArgs() {
  const args = process.argv.slice(2); // Remove the first two default arguments
  const parsedArgs: Record<string, string | boolean> = {};

  args.forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.substring(2).split("=");
      parsedArgs[key] = value || true;
    }
  });

  return parsedArgs;
}
