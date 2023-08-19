import { Schema, model } from 'mongoose'
import { INote, NoteModel } from './notes.interface'

const noteSchema = new Schema<INote, NoteModel>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Note = model<INote, NoteModel>('Note', noteSchema)
