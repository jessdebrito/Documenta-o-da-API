import { Request, Response, NextFunction} from 'express'
import { IUserCreate } from '../../interfaces/user.interfaces'
import { SchemaOf } from 'yup'



export const validateUserCreate = (schema: SchemaOf<IUserCreate>) => async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body

    try {

        const validatedData = await schema.validate(
            data, 
            { 
                abortEarly: false, 
                stripUnknown: true
            }
        )

        req.newUser = validatedData
        
        next()

    } catch (err: any) {

        // yup error handling
        return res.status(400).json({
            error: err.errors?.join(', ')
        })
    }

}