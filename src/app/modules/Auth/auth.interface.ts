import { Model, Types } from 'mongoose'

export type UserName = {
  firstName: string
  lastName: string
}

export type IUser = {
  _id?: Types.ObjectId
  password: string
  name: UserName
  address: string
  email: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
