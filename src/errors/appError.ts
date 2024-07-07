export class AppError extends Error {

    statusCode

    constructor(statusCode: number = 500, message: string) {
        super()
        this.statusCode = statusCode
        this.message = message
    }
}