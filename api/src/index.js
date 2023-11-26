// import server configuration
const config = require('./config')

// import api [express instantiation]
const api = require('./api')

// run server
api.listen(config.NODE_PORT, () => {
  console.log(`API server listening on port: ${config.NODE_PORT}`)
  console.log(`API docs are available on http://localhost:${config.NODE_PORT}/api/docs`)
})
