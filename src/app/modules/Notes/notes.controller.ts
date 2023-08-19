import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { NoteService } from './notes.service'

const createNote = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body

  const result = await NoteService.createNote(userData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Note Created Successfully',
    data: result,
  })
})

export const NoteController = {
  createNote,
}
