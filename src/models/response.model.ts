export interface ResponseModel {
    data: any|null,
    error: boolean,
    message: string|null,
    status: number|null
}

export const ErrorResponse: ResponseModel = {
    data: null,
    error: true,
    message: null,
    status: 500
};

export const SuccessResponse: ResponseModel = {
    data: null,
    error: false,
    message: null,
    status: 200
};