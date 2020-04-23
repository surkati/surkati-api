const result = {
    status: false,
    data: null
}

const environment = process.env.NODE_ENV === 'production' ? true : false

/**
 * Internal Server Error
 * @param {Error} error 
 */
export const InternalServerError = error => {
    if(!environment) console.error(error)

    return {
        ...result,
        statusCode: 500,
        message: environment ? 'Internal Server Error!' : error.message
    }
}

/**
 * Bad Gateway
 * @param {Error} error 
 */
export const BadGateway = error => {
    if(!environment) console.error(error)

    return {
        ...result,
        statusCode: 502,
        message: environment ? 'Bad Gateway!' : error.message
    }
}

/**
 * Service Unavailable
 * @param {Error} error 
 */
export const ServiceUnavailable = error => {
    if(!environment) console.error(error)

    return {
        ...result,
        statusCode: 503,
        message: environment ? 'Service Unavailable!' : error.message
    }
}