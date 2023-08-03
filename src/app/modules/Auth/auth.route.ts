import express from 'express'
import { UserController } from './auth.controller'

const router = express.Router()

router.post('/createuser', UserController.createUser)
router.post('/login', UserController.loginUser)

export const UserRoutes = router
