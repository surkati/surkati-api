import express from 'express'
import * as Sentry from '@sentry/node'
import * as middlewares from '../middlewares'

const app = {}

app.setup = config => {
    // express server app
    const app = express()

    if (!config.debug) {
        // dns sentry
        Sentry.init(config.sentry)
    }

    // request handler looger
    if (!config.debug) app.use(Sentry.Handlers.requestHandler())

    // setup middleware in express
    Object.values(middlewares).forEach(middleware => {
        middleware(app)
    })

    // server listen
    app.listen(config.port, () => console.log(`Server starting in port : ${config.port}`) )
}

export default app