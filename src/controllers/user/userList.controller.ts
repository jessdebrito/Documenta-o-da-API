import { Request, Response } from 'express'
import { ISafeUser } from '../../interfaces/user.interfaces'
import { userListService } from '../../services/user'

const userListController = async (req: Request, res: Response) => {

    const userList: ISafeUser[] = await userListService()

    userList.map(user => delete user.password)

    return res.json(userList)
}

export default userListController