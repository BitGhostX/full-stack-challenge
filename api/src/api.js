// vendor dependencies
const express = require('express')

// project dependencies
const SwaggerDocs = require('./swagger')

// express instantiation
const api = express()

// cors configuration
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  return next()
})

// import routes
const routes = require('./routes')

// routes definitions
api.use('/files', routes.FilesRoutes)

// swagger docs
SwaggerDocs(api)

/** error handling */

// http error 404
api.use((req, res, next) => {
  return res.status(404).json({ message: 'Not Found' })
})
// http error 500
api.use((err, req, res, next) => {
  console.log(err)
  return res.status(500).json({ message: 'Internal Server Error' })
})

module.exports = api
