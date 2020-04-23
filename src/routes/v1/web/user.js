import { Router } from 'express'
import { paginationRequest } from '../request/base.request'
import controller from '@controllers/web/user.controller'

const route = Router()

route.get('/user-api', paginationRequest, controller.userApi)
route.get('/user-web', paginationRequest, controller.userWeb)
route.get('/user-mobile', paginationRequest, controller.userMobile)

export default route