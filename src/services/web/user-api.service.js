import { responseSuccess } from '@utils/response-format'
import { InternalServerError } from '@exception/ServerError'
import { Op } from 'sequelize'
import UserApi from '@models/user-api.model'

const service = {}

service.findAll = async ({
    page = 1,
    paginate = 10,
    search = ''
}) => new Promise((resolve, reject) => {
    let options = {
        page,
        paginate,
        attributes: {
            exclude: ['password']
        },
        order: [
            ['name', 'ASC']
        ],
        where: {
            [Op.or] : {
                name: { [Op.like]: `%${search}%` },
                email: { [Op.like]: `%${search}%` }
            }
        }
    }
    
    UserApi.paginate(options).then(data => resolve(
        responseSuccess(data)
    )).catch(error => reject(
        InternalServerError(error)
    ))
})

export default service