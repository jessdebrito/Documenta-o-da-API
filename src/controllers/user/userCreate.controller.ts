import { Request, Response } from 'express'
import { userCreateService } from '../../services/user'

const userCreateController = async (req: Request, res: Response) => {

    const data = req.newUser

    const user = await userCreateService({...data})

    const { password, ...safeUser } = user

    return res
        .status(201)
        .json(safeUser)

}

export default userCreateController