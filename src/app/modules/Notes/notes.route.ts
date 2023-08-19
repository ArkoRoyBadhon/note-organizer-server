import express from 'express'
import { NoteController } from './notes.controller'
import authPermission from '../../middlewares/auth'

const router = express.Router()

router.post('/createnote', authPermission('user'), NoteController.createNote)

export const NotesRoutes = router
