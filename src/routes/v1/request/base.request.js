import { query, header } from 'express-validator'
import { app } from '@config'
import { Forbidden } from '@exception/HttpException'

export const paginationRequest = [
    query('page', 'the page must be an integer').optional({ nullable: true }).isInt(),
    query('paginate', 'the paginate must be an integer').optional({ nullable: true }).isInt(),
    query('search', 'the search must be an string').optional({ nullable: true }).isString()
]

export const mobileRequest = [
    header('api_key', 'invalid key').custom(value => {
        if (value !== app.api_key) throw new Forbidden()
        return true
    })
]