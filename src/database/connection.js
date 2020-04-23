import Sequelize from 'sequelize'
import { app, database } from '@config/index'

const config = database[app.deploy]

/**
 * Connection with sequelize
 * @returns Sequelize
 */
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password, {
        host: config.host,
        dialect: config.dialect,
        dialectOptions: {
            useUTC: false,
            timezone: 'Etc/GMT0'
        },
        timezone: '+07:00',
        logging: false
    }
)

export default sequelize