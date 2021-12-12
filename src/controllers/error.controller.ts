import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../models/response.model';

export const NotFoundController = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({
        ...ErrorResponse,
        ...{
            message: "Not found",
            status: 404
        }
    });
};

export const ErrorController = (err:any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({
        ...ErrorResponse,
        ...{
            message: err
        }
    });
};