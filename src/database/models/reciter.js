import { DataTypes } from 'sequelize'
import connection from '../connection'
import SequelizePaginate from 'sequelize-paginate'

const model = connection.define('reciter', {
    name: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    server: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    riwayat: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    count: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    suras: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {})

SequelizePaginate.paginate(model)

export default model