import { validate } from '@controllers/base.controller'
import authService from '@services/web/auth.service'

const controller = {}

controller.login = async (request, response, next) => {
    try {
        // validate request
        validate(request)

        let result = await authService.login(request.body)
        response.json(result)
    } catch (error) {
        next(error)
    }
}

export default controller