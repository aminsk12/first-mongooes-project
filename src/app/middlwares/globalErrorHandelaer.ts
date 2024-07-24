import { NextFunction, Request, Response } from "express";

const globalErrorHandeler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCoded = 500;
  const message = err.message || "Somthing went wrong!";
  return res.status(statusCoded).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandeler;