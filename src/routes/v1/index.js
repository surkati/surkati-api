import * as apiRoutes from './api'
import * as webRoutes from './web'
import * as mobileRoutes from './mobile'
import webPermission from './persmission/web.permission'

const version = 'v1'

const router = app => {
    // routes api
    Object.entries(apiRoutes).forEach(([prefix, route]) => {
        if (prefix === 'auth') {
            app.use(`/${version}/api/${prefix}`, route)
        } else {
            app.use(`/${version}/api/${prefix}`, route)
        }
    })

    // routes mobile
    Object.entries(mobileRoutes).forEach(([prefix, route]) => {
        if (prefix === 'auth') {
            app.use(`/${version}/mobile/${prefix}`, route)
        } else {
            app.use(`/${version}/mobile/${prefix}`, route)
        }
    })

    // routes web
    Object.entries(webRoutes).forEach(([prefix, route]) => {
        if (prefix === 'auth') {
            app.use(`/${version}/web/${prefix}`, route)
        } else {
            app.use(`/${version}/web/${prefix}`, webPermission(prefix), route)
        }
    })
}

export default router