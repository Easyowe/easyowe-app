const express = require('express');
const controller = require('../../controllers/split.controller');

const router = express.Router();

/**
 * @api {post} v1/split
 * @apiDescription Create new split
 * @apiVersion 1.0.0
 * @apiName Create split
 * @apiGroup Split
 * @apiPermission public
 *
 */
router.route('/').post(controller.createSplit);

module.exports = router;
