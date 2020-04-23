import { Router } from 'express'
import { mobileRequest } from '../request/auth.request'
import controller from '@controllers/mobile/auth.controller'

const route = Router()

route.post('/login', mobileRequest, controller.login)

export default route