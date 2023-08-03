import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { IUser } from './auth.interface'
import { User } from './auth.model'

const createUser = async (payload: IUser): Promise<IUser> => {
  const existingUser = await User.findOne({
    'name.firstName': payload.name.firstName,
    'name.lastName': payload.name.lastName,
    email: payload?.email,
  })

  if (existingUser) {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, 'User is already exists')
  }

  const result = await User.create(payload)
  return result
}

export const UserService = {
  createUser,
}
