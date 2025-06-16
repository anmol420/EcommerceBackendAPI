import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

let db;

const connectDB = async () => {
    try {
        db = drizzle(neon(Bun.env.DATABASE_URL!));
        console.log("Database Connection Established Successfully.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

export {
    db,
    connectDB,
};