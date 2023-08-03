import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { UserService } from './auth.service'
import config from '../../../config'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body

  const result = await UserService.createUser(userData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully',
    data: result,
  })
})

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body
  console.log(loginData)

  const result = await UserService.loginUser(loginData)
  const { refreshToken, ...others } = result

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  }

  res.cookie('refreshToken', refreshToken, cookieOptions)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User logged In successfully !',
    data: others,
  })
})

export const UserController = {
  createUser,
  loginUser,
}
