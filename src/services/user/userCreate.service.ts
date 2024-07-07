import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors/appError"
import { IUserCreate } from "../../interfaces/user.interfaces"

const userCreateService = async ({ name, email, password, isAdm }: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User)

    const emailConflict = await userRepository.findOne({
        where: {
            email: email
        }
    })

    if (emailConflict) {

        throw new AppError(409, "E-mail already registered.")
    }

    const user = new User()
    user.name = name
    user.email = email
    user.password = password
    user.isAdm = isAdm

    userRepository.create(user)
    await userRepository.save(user)

    return user

}

export default userCreateService