// project dependencies
const ToolboxFiles = require('../../toolbox')

module.exports = async (req, res, next) => {
  try {
    const list = await ToolboxFiles.getList()
    return res.status(200).json(list)
  } catch (e) {
    return next(e)
  }
}
