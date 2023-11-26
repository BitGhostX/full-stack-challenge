// project dependencies
const ToolboxFiles = require('../../toolbox')

module.exports = async (req, res, next) => {
  try {
    const filesData = []

    const { files } = await ToolboxFiles.getList()

    // extract fileName from queryparams
    const { fileName } = req.query
    // check if fileName has a valid value
    if (typeof fileName !== 'undefined' && fileName !== '') {
      // check if fileName is in the file list from TOOLBOX API
      if (!files.includes(fileName)) {
        return res.status(400).json({ message: 'File Not Found' })
      }

      const data = await ToolboxFiles.getFile(fileName)
      filesData.push(data)
    } else {
      // fetch every file in files list
      for (const file of files) {
        const data = await ToolboxFiles.getFile(file)
        filesData.push(data)
      }
    }

    return res.status(200).json(filesData)
  } catch (e) {
    return next(e)
  }
}
