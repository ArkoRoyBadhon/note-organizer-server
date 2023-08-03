import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { ILoginUser, ILoginUserResponse, IUser } from './auth.interface'
import { User } from './auth.model'
import config from '../../../config'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
import { Secret } from 'jsonwebtoken'

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

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload

  const NormalUser = await User.findOne({ email })

  const id = NormalUser?.id

  const isUserExist = await User.isUserExist(id)

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  // create access token & refresh token
  const { _id: Id, role } = isUserExist

  const accessToken = jwtHelpers.createToken(
    { Id, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  )

  const refreshToken = jwtHelpers.createToken(
    { Id, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  )

  return {
    accessToken,
    refreshToken,
  }
}

export const UserService = {
  createUser,
  loginUser,
}
