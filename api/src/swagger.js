const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Palantir Project API',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/files.js']
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = (api) => {
  api.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  api.get('/api/docs.json', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}
