import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";

import moderationRoutes from "./api/v1/routes/moderationRoutes";

const app: Express = express();

//Environment based configuration
const NODE_ENV = process.env.NODE_ENV || "development";
const LOG_LEVEL = process.env.LOG_LEVEL || "info";

// Use morgan for HTTP request logging
app.use(morgan("development"));

/**
 * Mount moderation routes on /api/v1/moderation
 */
app.use("/api/v1/moderation", moderationRoutes);

/**
 * Default error handler for unmatched routes
 */
app.use((req: Request, res: Response): void => {
    res.status(404).json({ message: "Endpoint not found" });
});

export default app;