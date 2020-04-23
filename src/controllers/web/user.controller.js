import { validate } from '@controllers/base.controller'
import userApiService from '@services/web/user-api.service'
import userWebService from '@services/web/user-web.service'
import userMobileService from '@services/web/user-mobile.service'

const controller = {}

/**
 * get list user api
 * 
 * @Query {page, paginate, search}
 * @Response object paginate
 */
controller.userApi = async (request, response, next) => {
    try {
        // validate request
        validate(request)

        let result = await userApiService.findAll(request.query)
        response.json(result)
    } catch (error) {
        next(error)
    }
}

/**
 * get list user web
 * 
 * @Query {page, paginate, search}
 * @Response object paginate
 */
controller.userWeb = async (request, response, next) => {
    try {
        // validate request
        validate(request)

        let result = await userWebService.findAll(request.query)
        response.json(result)
    } catch (error) {
        next(error)
    }
}

/**
 * get list user mobile
 * 
 * @Query {page, paginate, search}
 * @Response object paginate
 */
controller.userMobile = async (request, response, next) => {
    try {
        // validate request
        validate(request)
        
        let result = await userMobileService.findAll(request.query)
        response.json(result)
    } catch (error) {
        next(error)
    }
}

export default controller