const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mariadb',
        dialectOptions: {
            useUTC: false,
            timezone: 'Etc/GMT0'
        },
        timezone: '+07:00',
        logging: false
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mariadb',
        dialectOptions: {
            useUTC: false,
            timezone: 'Etc/GMT0'
        },
        timezone: '+07:00',
        logging: false
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mariadb',
        dialectOptions: {
            useUTC: false,
            timezone: 'Etc/GMT0'
        },
        timezone: '+07:00',
        logging: false
    }
}