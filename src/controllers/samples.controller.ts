import { Request, Response, NextFunction } from 'express';
import { SuccessResponse } from '../models/response.model';
import { connect } from 'mongoose';
import { AccountModel, Account } from '../models/account';
import { getPaginationObject, Pagination } from '../utils/pagination';

export const SamplesController = {
    get: async (req:Request, res:Response, next:NextFunction) => {
        await connect(process.env.DB_URL);
        const { page, perPage } = req.query;
        const pagination: Pagination = getPaginationObject(page, perPage);

        const docs: Array<Account> = await AccountModel.find().skip(pagination.skip).limit(pagination.size);
        pagination.totalElements = await AccountModel.countDocuments();
        pagination.totalPages = Math.ceil(pagination.totalElements / pagination.size);

        res.send({
            ...SuccessResponse,
            ...{
                data: {
                    content: docs,
                    pagination: pagination
                }
            }
        });
    }
}