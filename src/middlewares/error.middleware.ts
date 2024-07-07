import { Request, Response, NextFunction, response } from 'express'
import { AppError } from '../errors/appError'

export const errorMiddleware = (err: any, req: Request, res: Response, _: NextFunction) => {

    if (err instanceof AppError) {

        return res
            .status(err.statusCode)
            .json({
                status: "error",
                code: err.statusCode,
                message: err.message
            })

        console.error(err)

        return res
            .status(500)
            .json({
                status: "error",
                code: 500,
                message: "Internal server error"
            })
    }
}