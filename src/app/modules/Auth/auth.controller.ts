import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { UserService } from './auth.service'

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

export const UserController = {
  createUser,
}
