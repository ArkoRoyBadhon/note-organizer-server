import express from 'express'
import { UserController } from './auth.controller'

const router = express.Router()

router.post('/createuser', UserController.createUser)

export const UserRoutes = router
