import { responseSuccess } from '@utils/response-format'
import { InternalServerError } from '@exception/ServerError'
import { BadRequest } from '@exception/HttpException'
import { LoginDto } from '../dto/auth.dto'
import UserModel from '@models/user-mobile.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const service = {}

service.login = async ({ email, password }) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({
            where: { email }
        }).then(response => {
            if (response !== null) {
                bcrypt
                    .compare(password, response.password)
                    .then(result => {
                        let token = jwt.sign(LoginDto(response), process.env.JWT_KEY)
                        if (result) {
                            resolve(responseSuccess({ token }))
                        } else {
                            reject(BadRequest('username or passowrd invalid!'))
                        }
                    })
            } else {
                reject(BadRequest('username or passowrd invalid!'))
            }
        }).catch(error => reject(
            InternalServerError(error)
        ))
    })
}

export default service