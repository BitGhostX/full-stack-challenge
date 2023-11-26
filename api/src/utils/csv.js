/**
 * @typedef {Object} Line
 * @property {string} text - The text
 * @property {number} number - The number
 * @property {string} hex - The 32 digits hex
 */

/**
 * @typedef {Object} File
 * @property {string} file - The file name
 * @property {Line[]} lines - The file lines
 */

/**
 * CSV to JSON, grouped by file
 * @param {string} text - CSV content
 * @param {string} file - CSV file name
 * @returns {File} Using the format of the challenge specifications
 */
const parse = (text, file) => {
  const lines = []

  // convert text to array of lines
  const textLines = text.split('\n')

  // skip headers line
  for (let l = 1; l < textLines.length; l++) {
    // convert line to array of columns
    const line = textLines[l].split(',')

    /** validations */

    // validate the number of columns
    if (line.length < 4) {
      continue
    }
    // validate if file column match with the file name
    if (file !== line[0]) {
      continue
    }
    // validate if text column contain only letters
    if (!(/^[a-zA-Z]+$/.test(line[1]))) {
      continue
    }
    // validate if number column is a number
    if (isNaN(+line[2])) {
      continue
    }
    // validate hex column length
    if (line[3].length !== 32) {
      continue
    }

    lines.push({
      text: line[1],
      number: +line[2],
      hex: line[3]
    })
  }
  return {
    file,
    lines
  }
}

module.exports = {
  parse
}
