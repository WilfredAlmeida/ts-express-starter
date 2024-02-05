import { NextFunction, Request, Response } from "express";
import { logger } from "../logger/index";

const example = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  logger.info("In Middleware")

  next();
};

export default example;
