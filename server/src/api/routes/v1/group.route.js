const express = require('express');
const controller = require('../../controllers/group.controller');

const router = express.Router();

/**
 * @api {post} v1/group/create-group
 * @apiDescription Create new group
 * @apiVersion 1.0.0
 * @apiName Create Group
 * @apiGroup Group
 * @apiPermission public
 *
 */
router.route('/create-group').post(controller.createGroup);

/**
 * @api {post} v1/group/:groupId
 * @apiDescription Update existing group
 * @apiVersion 1.0.0
 * @apiName Update Group
 * @apiGroup Group
 * @apiPermission public
 *
 */
router.route('/:groupId').put(controller.updateGroup);

/**
 * @api {delete} v1/group/
 * @apiDescription delete new group
 * @apiVersion 1.0.0
 * @apiName Create Group
 * @apiGroup Group
 * @apiPermission public
 *
 */
router.route('/:groupId').delete(controller.deleteGroup);

/**
 * @api {get} v1/group/:groupId
 * @apiDescription get group
 * @apiVersion 1.0.0
 * @apiName Get Group
 * @apiGroup Group
 * @apiPermission public
 *
 */
router.route('/:groupId').get(controller.getGroup);

/**
 * @api {get} v1/group/user/:userId
 * @apiDescription get group
 * @apiVersion 1.0.0
 * @apiName Get Group
 * @apiGroup Group
 * @apiPermission public
 *
 */
router.route('/user/:userId').get(controller.getAllGroupsForUser);

module.exports = router;
