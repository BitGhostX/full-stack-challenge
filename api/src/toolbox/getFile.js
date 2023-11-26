// project dependencies
const { HTTPSRequest, CSV } = require('../utils')

// import parameters from server configuration
const { TOOLBOX } = require('../config')

/**
 * Fetch file from the TOOLBOX API
 * @param {string} filename - The file name to fetch
 * @returns {File} Using the format of the challenge specifications
 * @throws An error if can't complete the https request
 */
module.exports = async (filename) => {
  try {
    const body = await HTTPSRequest({
      hostname: TOOLBOX.HOSTNAME,
      port: 443,
      path: `/v1/secret/file/${filename}`,
      method: 'GET',
      headers: {
        'Content-Type': 'text/csv',
        authorization: `Bearer ${TOOLBOX.SECRET_KEY}`
      }
    })

    const data = CSV.parse(body, filename)

    return data
  } catch (e) {
    throw new Error(e)
  }
}
