import { DataTypes } from 'sequelize'
import connection from '../connection'
import SequelizePaginate from 'sequelize-paginate'

const model = connection.define('users_api', {
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
        type: DataTypes.ENUM('free', 'pro'),
        allowNull: true,
        defaultValue: 'free'
    },
    status: {
        type: DataTypes.ENUM('active', 'suspend'),
        allowNull: false,
        defaultValue: 'active'
    },
    token: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {})

SequelizePaginate.paginate(model)

export default model