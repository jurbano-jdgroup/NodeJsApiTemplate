import { Schema, model } from "mongoose";

export interface Account {
    _id?: number,
    account_id: number,
    limit: number,
    products: Array<string>
};

export const AccountSchema = new Schema<Account> ({
    _id: Schema.Types.ObjectId,
    account_id: {type: Number, required: true},
    limit: {type: Number, required: true},
    products: {type: [String], required:false}
});

export const AccountModel = model<Account>('Account', AccountSchema);