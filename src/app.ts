import express from 'express'
import { appRoutes } from './routes'
import { errorMiddleware } from './middlewares/error.middleware'
import 'reflect-metadata'
import 'express-async-errors'

const app = express()

app.use(express.json())

appRoutes(app)

app.use(errorMiddleware)

app.listen(3000)