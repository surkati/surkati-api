/**
 * Bad Request
 * @param {String} message 
 * @param {Object} data
 */
export const BadRequest = (message, data = null) => {
    return {
        status: false,
        statusCode: 400,
        message: message || 'Bad Request!',
        data
    }
}

/**
 * Unauthorized
 * @param {String} message 
 * @param {Object} data
 */
export const Unauthorized = (message, data = null) => {
    return {
        status: false,
        statusCode: 401,
        message: message || 'Unauthorized!',
        data
    }
}


/**
 * Forbidden
 * @param {String} message 
 * @param {Object} data
 */
export const Forbidden = (message, data = null) => {
    return {
        status: false,
        statusCode: 403,
        message: message || 'Forbidden!',
        data
    }
}


/**
 * Not Found
 * @param {String} message 
 * @param {Object} data
 */
export const NotFound = (message, data = null) => {
    return {
        status: false,
        statusCode: 404,
        message: message || 'Not Found!',
        data
    }
}


/**
 * Unprocessable Entity
 * @param {String} message 
 * @param {Object} data
 */
export const UnprocessableEntity = (message, data = null) => {
    return {
        status: false,
        statusCode: 422,
        message: message || 'Unprocessable Entity!',
        data
    }
}