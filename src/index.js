import dotenv from 'dotenv'
import app from './bootstrap/app'
import { app as config } from './config'

// dotenv environment variables file
dotenv.config()

// start bootstrap apps server
app.setup(config)