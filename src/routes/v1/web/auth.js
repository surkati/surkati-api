import { Router } from 'express'
import { webRequest } from '../request/auth.request'
import controller from '@controllers/web/auth.controller'

const route = Router()

route.post('/login', webRequest, controller.login)

export default route