import express from 'express'
import { UserRoutes } from '../modules/Auth/auth.route'
import { NotesRoutes } from '../modules/Notes/notes.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/',
    route: NotesRoutes,
  },
]

moduleRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
