import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const middleware = async app => {

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

    // coolie parser
    app.use(cookieParser())
}

export default middleware