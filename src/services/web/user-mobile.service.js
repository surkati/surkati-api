import { responseSuccess } from '@utils/response-format'
import { InternalServerError } from '@exception/ServerError'
import { Op } from 'sequelize'
import UserMobile from '@models/user-mobile.model'

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
    
    UserMobile.paginate(options).then(data => resolve(
        responseSuccess(data)
    )).catch(error => reject(
        InternalServerError(error)
    ))
})

export default service