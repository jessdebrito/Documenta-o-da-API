import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors/appError"


const userListByIdService = async (user_id: string) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: user_id
        }
    })

    if (!user) {

        throw new AppError(404, "User not found")
    }

    return user

}

export default userListByIdService