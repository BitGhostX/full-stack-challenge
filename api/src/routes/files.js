// vendor dependencies
const router = require('express').Router()

// controllers
const { FilesControllers } = require('../controllers')

/** routes definitions */

/**
 * @openapi
 * /files/list:
 *   get:
 *     tags:
 *       - Files
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 files:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.get('/list', [
  FilesControllers.getList
])

/**
 * @openapi
 * /files/data:
 *   get:
 *     tags:
 *       - Files
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   file:
 *                     type: string
 *                   lines:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         text:
 *                           type: string
 *                         number:
 *                           type: number
 *                         hex:
 *                           type: string
 */
router.get('/data', [
  FilesControllers.getData
])

module.exports = router
