import { migrate } from "drizzle-orm/neon-http/migrator";

import { db } from "./src/db";

const migrateDB = async () => {
    try {
        await migrate(db, {
            migrationsFolder: "./drizzle/migrations",
        });
    } catch (error) {
        console.error("Migration failed:", error);
    }
};

migrateDB()
    .then(() => {
        console.log("Migration completed successfully.");
    })
    .catch((error) => {
        console.error("Migration error:", error);
    });