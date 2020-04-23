import { validationResult } from 'express-validator'
import { UnprocessableEntity } from '@exception/HttpException'

export const validate = request => {
    // validation request
    let validate = validationResult(request)
    if (!validate.isEmpty()) throw new UnprocessableEntity(null, validate.array())
}