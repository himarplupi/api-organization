// Library
const Express = require('express')
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const path = require('path')

// App
const ModelHandler = require('./database/models/ModelHandler.js')
const RoutesHandler = require('./routes/RoutesHandler.js')

class Server {
  init () {
    this.model = new ModelHandler(this)

    this.model.connect({
      hosts: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      dialect: process.env.DB_DIALECT,
      logging: false
    })

    this.runAPI()
  }

  runAPI () {
    this.api = Express()

    this.api.use(cors())
    this.api.use(logger('dev'))
    this.api.use(Express.json())
    this.api.use(Express.urlencoded({ extended: false }))
    this.api.use(cookieParser())
    this.api.use(Express.static(path.join(__dirname, 'public')))

    this.api.use((err, req, res, next) => {
      if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
          statusCode: 400,
          message: `Bad Request: ${err.message}`
        })
      }

      next()
    })

    new RoutesHandler(this, this.api)
  }
};

module.exports = Server
