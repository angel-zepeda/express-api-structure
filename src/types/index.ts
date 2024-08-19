import { Document } from 'mongoose'
import { Request } from 'express'

export interface IUserModel extends Document {
  name: string
  email: string
  password: string
  lastLoginAt: string
  authToken: string
  createdAt: string
  updatedAt: string
}

export interface ApiRequest extends Request {
  user: IUserModel
}
