import dotenv from 'dotenv'

// dotenv environment variables file
dotenv.config()

const config = {
    name: process.env.APP_NAME,
    port: process.env.APP_PORT,
    version: process.env.APP_VERSION,
    deploy: process.env.NODE_ENV,
    debug: process.env.NODE_ENV === 'development',
    key: process.env.APP_KEY,
    api_key: process.env.API_KEY,
    sentry: {
        release: `${process.env.APP_NAME}@${process.env.APP_VERSION}`,
        dsn: process.env.SENTRY_DSN
    }
}

export default config