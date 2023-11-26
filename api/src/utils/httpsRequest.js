// dependencies
const https = require('https')

/**
 * Make an async/await https request, only works for GET method
 * @param {Object} options - https.request options [ ref: https://nodejs.org/api/https.html#httpsrequesturl-options-callback ]
 * @returns {Promise<string|Error>} Promise object representing the https request body
 */
module.exports = (options) => {
  return new Promise((resolve, reject) => {
    const request = https.request(options, (response) => {
      response.setEncoding('utf-8')
      let body = ''

      response.on('data', (chunk) => {
        body += chunk
      })

      response.on('end', () => {
        resolve(body)
      })
    })

    request.on('error', (err) => {
      reject(err)
    })

    request.end()
  })
}
