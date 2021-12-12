import { Request, Response, NextFunction } from 'express';
import { ErrorResponse, SuccessResponse } from '../models/response.model';
import jwt from 'jsonwebtoken';

export const LoginController = {
    post: (req: Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body;

        if (!(username && password)) res.status(400).send({
            ...ErrorResponse,
            ...{
                status: 400,
                message: 'username or password no specified'
            }
        });

        let token: string = jwt.sign({
            user_id: 1,
            password
        },
            process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        if (!token) {
            throw Error("Error creating the jwt token");
        }

        const date: Date = new Date();
        date.setHours(date.getHours() + 1);

        res.send({
            ...SuccessResponse,
            ...{
                data: {
                    username: username,
                    token: token,
                    expires: date.toString()
                },
                message: 'Login success'
            }
        })
    }
}