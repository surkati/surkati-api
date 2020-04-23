import jwt from 'jsonwebtoken'
import { Unauthorized, BadRequest, Forbidden } from '@exception/HttpException'

// prefix route
const initialize = {
    prefix: null
}

// role access
const roleAccess = {
    free: [],
    pro: []
}

/**
 * get role in route
 * @param {string} role 
 */
const permission = prefix => {
    initialize.prefix = prefix
    return middleware
}

/**
 * middleware express
 * @param {Request} request 
 * @param {Response} _response 
 * @param {NextFunction} next 
 * 
 * @Return NextFunction
 */
const middleware = (request, _response, next) => {
    if (typeof request.headers.authorization === 'undefined') throw new Unauthorized()

    let [ type, token ] = request.headers.authorization.split(' ')
    
    if (type !== 'Bearer') throw new BadRequest()

    let payload = jwt.verify(token, process.env.JWT_KEY)

    if (roleAccess[payload.role].indexOf(initialize.prefix) < 0) throw new Forbidden()

    request.user = payload

    return next()
}

export default permission