// project dependencies
const { HTTPSRequest } = require('../utils')

// import parameters from server configuration
const { TOOLBOX } = require('../config')

/**
 * @typedef {Object} FilesList
 * @property {string[]} files
 */

/**
 * Fetch files list from the TOOLBOX API
 * @returns {FilesList} - Files list
 * @throws An error if can't complete the https request
 */
module.exports = async () => {
  try {
    const body = await HTTPSRequest({
      hostname: TOOLBOX.HOSTNAME,
      port: 443,
      path: '/v1/secret/files',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOOLBOX.SECRET_KEY}`
      }
    })

    const data = JSON.parse(body)

    return data
  } catch (e) {
    throw new Error(e)
  }
}
