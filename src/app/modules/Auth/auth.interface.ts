import { Model, Types } from 'mongoose'

export type ILoginUser = {
  email: string
  password: string
}

export type ILoginUserResponse = {
  accessToken: string
  refreshToken?: string
}

export type IRefreshTokenresponse = {
  accessToken: string
}

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
  role: string
}

export type UserModel = {
  isUserExist(
    phoneNumber: string,
  ): Promise<Pick<IUser, '_id' | 'email' | 'role' | 'password'>>
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>
} & Model<IUser>
