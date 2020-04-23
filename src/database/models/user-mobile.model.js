import { DataTypes } from 'sequelize'
import connection from '../connection'
import SequelizePaginate from 'sequelize-paginate'

const model = connection.define('users_mobile', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique : true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    picture: {
        type: DataTypes.STRING(191),
        allowNull: false,
        defaultValue: 'default.png'
    },
    role: {
        type: DataTypes.ENUM('ustadz', 'member'),
        allowNull: true,
        defaultValue: 'member'
    },
    status: {
        type: DataTypes.ENUM('active', 'suspend'),
        allowNull: false,
        defaultValue: 'active'
    }
}, {})

SequelizePaginate.paginate(model)

export default model