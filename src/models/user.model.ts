export interface User {
    username: string,
    name: string,
    surname: string,
    email: string,
    countryCode?:string,
    phone?: string,
    address?: string,
    city?: string,
    state?: string,
    country?: string,
    password:string
}

export interface UserAuth {
    username: string,
    password: string
}