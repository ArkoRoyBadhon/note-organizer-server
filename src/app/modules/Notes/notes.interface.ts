import { Model, Types } from 'mongoose'

export type INote = {
  _id?: Types.ObjectId
  title: string
  description: string
  image: string
  category: string
  userId: string
}

export type NoteModel = Model<INote, Record<string, unknown>>
