const { exec } = require("node:child_process");

const handleReturn = (error, stdout) => {
  if (stdout.search("accepting connections") === -1) {
    process.stdout.write(".");
    checkPostgres();
    return;
  }
  console.log("\n🟢 Postgres is ready and accept connections");
};

const checkPostgres = () => {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);
};

process.stdout.write(`\n🔴 wait for postgres accept connections`);
checkPostgres();
