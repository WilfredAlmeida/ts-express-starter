import { Logger } from "winston";
import { developmentLogger } from "./developmentLogger";
import dotenv from "dotenv";
dotenv.config();

let logger: Logger;

if (process.env.NODE_ENV === "development") {
  logger = developmentLogger();
}

export { logger };
