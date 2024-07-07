import { Router } from "express";

import { 
    userCreateController,
    userListController,
    userListByIdController
} from "../controllers/user";

import { 
    validateUserCreate
} from "../middlewares/user";

import {
    userCreateSchema
} from "../schemas/user"

const routes = Router()

export const userRoutes = () => {

    routes.post('/', [validateUserCreate(userCreateSchema)] ,userCreateController)
    routes.get('/', userListController)
    routes.get('/:user_id', userListByIdController)

    return routes
}