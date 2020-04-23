import { responseSuccess } from '@utils/response-format'
import { InternalServerError } from '@exception/ServerError'
import { Op } from 'sequelize'
import UserWeb from '@models/user-web.model'

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
    
    UserWeb.paginate(options).then(data => resolve(
        responseSuccess(data)
    )).catch(error => reject(
        InternalServerError(error)
    ))
})

export default service