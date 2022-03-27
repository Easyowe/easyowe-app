const express = require("express");
const controller = require("../../controllers/friendRequests.controller");

const router = express.Router();

/**
 * @api {post} v1/friendRequests/:userId
 * @apiDescription Create new friend request
 * @apiVersion 1.0.0
 * @apiName Create Friend Request
 * @apiGroup Friend Request
 * @apiPermission public
 *
 */
router.route("/:userId").post(controller.createFriendRequest);

/**
 * @api {put} v1/friendRequests/:requestId
 * @apiDescription Update friend request
 * @apiVersion 1.0.0
 * @apiName Update Friend Request
 * @apiGroup Friend Request
 * @apiPermission public
 *
 */
router.route("/:requestId").put(controller.updateFriendRequest);

/**
 * @api {get} v1/friendRequests/:requestId
 * @apiDescription Get single friend request details by id
 * @apiVersion 1.0.0
 * @apiName Get Friend Request
 * @apiGroup Friend Request
 * @apiPermission public
 *
 */
router.route("/:requestId").get(controller.getFriendRequestById);

/**
 * @api {get} v1/friendRequests/user/:userId
 * @apiDescription Get all sent friend requests of a user
 * @apiVersion 1.0.0
 * @apiName Get Requests By User
 * @apiGroup Friend Request
 * @apiPermission public
 *
 */
router.route("/user/:userId").get(controller.getAllFriendRequestOfUser);

module.exports = router;
