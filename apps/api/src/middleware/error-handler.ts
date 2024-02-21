import { ErrorRequestHandler } from 'express';
import { ValidationError } from '../errors/ValidationError';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(400).json({ errors: err.errors });
  }

  next(err);
};

export default errorHandler;
