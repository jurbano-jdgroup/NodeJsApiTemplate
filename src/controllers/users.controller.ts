import { Request, Response, NextFunction } from 'express';
import { ResponseModel } from '../models/response.model';

export const UserController = {
    get: (req:Request, res:Response, next:NextFunction) => {
        const response: ResponseModel =  {
            status: 200,
            error: false,
            message: null,
            data: [{
                id: 1,
                name: "Julio",
                surname: "Urbano"
            }]
        }

        res.send(response);
    }
}