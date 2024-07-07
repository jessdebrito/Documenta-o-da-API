export interface IUser {
    id: string
    name: string
    email: string
    password: string
    isAdm: boolean
}

export interface ISafeUser {
    name: string
    email: string
    password?: string
    isAdm: boolean
}

export interface IUserCreate {
    name: string,
    email: string,
    password: string,
    isAdm: boolean
}