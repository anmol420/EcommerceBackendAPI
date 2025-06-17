import app from "./app";
import { connectDB } from "./db";

connectDB()
  .then(() => {
    console.log(`Server Running on Port: ${Bun.env.PORT}`);
    Bun.serve({
      fetch: app.fetch,
      port: Bun.env.PORT,
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });