import { Request, Response } from 'express'
import { ISafeUser } from '../../interfaces/user.interfaces'
import { userListByIdService } from '../../services/user'

const userListByIdController = async (req: Request, res: Response) => {

    const { user_id } = req.params

    const user: ISafeUser = await userListByIdService(user_id)

    delete user.password

    return res.json(user)
}

export default userListByIdController