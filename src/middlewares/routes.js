import * as Sentry from '@sentry/node'
import { responseError } from '@utils/response-format'
import { NotFound } from '@exception/HttpException'
import { app as config } from '@config/index'
import routersV1 from '../routes/v1'

const middleware = async app => {
    // use routes version 1
    routersV1(app)

    // route not found
    app.use((_request, _response, _next) => {
        throw new NotFound()
    })

    // logger in sentry
    if (!config.debug) app.use(Sentry.Handlers.errorHandler())

    // error handler
    app.use((error, _request, response, _next) => {
        response.status(error.statusCode)
        response.json(
            responseError(error.statusCode, error.message, error.data)
        )
    })
}

export default middleware