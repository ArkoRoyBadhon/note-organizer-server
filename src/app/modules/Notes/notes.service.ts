// import httpStatus from 'http-status'
// import ApiError from '../../../errors/ApiError'
import { Note } from './notes.model'
import { INote } from './notes.interface'

const createNote = async (payload: INote): Promise<INote> => {
  // const existingUser = await Note.findOne({
  //   title
  // })

  // if (existingUser) {
  //   throw new ApiError(httpStatus.NOT_ACCEPTABLE, 'User is already exists')
  // }

  const result = await Note.create(payload)
  return result
}

export const NoteService = {
  createNote,
}
