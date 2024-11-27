import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "../../../../infra/database.js";

const migrations = async (request, response) => {
  const dbClient = await database.getNewClient();
  const defaultMigrationOptions = {
    dbClient: dbClient,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations", // Nome da tabela de controle
  };

  if (request.method === "GET") {
    const pendingMigrations = await migrationRunner(defaultMigrationOptions);
    await dbClient.end();
    response.status(200).json([pendingMigrations]);
  }

  if (request.method === "POST") {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false,
    });

    await dbClient.end();

    if (migratedMigrations.length > 0) {
      response.status(201).json(migratedMigrations);
    } else {
      response.status(200).json(migratedMigrations);
    }
  }

  return response.status(405).end();
};

export default migrations;
