import { AppDataSource } from "../../data-source"
import { User } from "../../entities"


const userListService = async () => {

    const userRepository = AppDataSource.getRepository(User)

    const userList = await userRepository.find()

    return userList

}

export default userListService