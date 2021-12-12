import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ErrorResponse } from '../models/response.model';

export const BearerJWTRegex: RegExp = /^(Bearer\s)(.+)$/;

export const AuthController = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).send({
            ...ErrorResponse,
            ...{
                message: "Unauthorized"
            }
        });
    }

    const token = header.replace(BearerJWTRegex, '$2');

    if (!token) {
        return res.status(401).send({
            ...ErrorResponse,
            ...{
                message: "Unauthorized"
            }
        });        
    }

    // validate token
    let payload = null;

    try {
        payload = jwt.verify(token, process.env.JWT_SECRET);

        if (!payload) throw Error("Error deconding the token");
    } catch (error) {
        let errorMessage = "Token invalid";

        if (error.message) {
            if (error.message==='jwt expired') errorMessage = 'token expired';
        }

        return res.status(500).send({
            ...ErrorResponse,
            ...{
                message: errorMessage
            }
        }); 
    }

    return next();
}