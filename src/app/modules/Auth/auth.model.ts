import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './auth.interface'

const UserSchema = new Schema<IUser, UserModel>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const User = model<IUser, UserModel>('User', UserSchema)
