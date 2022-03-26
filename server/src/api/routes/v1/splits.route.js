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


/**
 * @api {get} v1/split/:splitId
 * @apiDescription Get split with SplitId
 * @apiVersion 1.0.0
 * @apiName getSplit
 * @apiGroup Split
 * @apiPermission public
 *
 */
 router.route('/:splitId').get(controller.getSplit);


 
/**
 * @api {get} v1/split/creator/:creatorId
 * @apiDescription Get all splits of 1 creator
 * @apiVersion 1.0.0
 * @apiName Get split
 * @apiGroup Split
 * @apiPermission public
 *
 */
 router.route('/creator/:creatorId').get(controller.getAllSplitsOfCreator);


/**
 * @api {get} v1/split/:splitId
 * @apiDescription Update split with SplitId
 * @apiVersion 1.0.0
 * @apiName updateSplit
 * @apiGroup Split
 * @apiPermission public
 *
 */
 router.route('/:splitId').put(controller.updateSplit);

 
/**
 * @api {get} v1/split/people/:peopleId
 * @apiDescription Get splits of people
 * @apiVersion 1.0.0
 * @apiName updateSplit
 * @apiGroup Split
 * @apiPermission public
 *
 */
 router.route('/people/:peopleId').get(controller.getAllSplitsOfPeople);



module.exports = router;
