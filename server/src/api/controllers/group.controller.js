const httpStatus = require('http-status');
const Groups = require('../models/groups.model');
const APIError = require('../utils/APIError');

exports.createGroup = async (req, res, next) => {
  try {
    const { name, members } = req.body;

    if (name && members.length > 0) {
      const newGroup = new Groups(req.body);
      const savedGroup = await newGroup.save();
      res.status(httpStatus.CREATED);
      res.json(savedGroup.transform());
    } else {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Need at least one userId',
      });
    }
  } catch (error) {
    return next(error);
  }
};

exports.updateGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const { name, members } = req.body;
    const group = await Groups.get(groupId);

    if (group && name && members.length > 0) {
      group.name = name;
      group.members = members;

      const savedGroup = await group.save();

      res.status(httpStatus.CREATED);
      res.json(savedGroup.transform());
    } else {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Need at least one userId',
      });
    }
  } catch (error) {
    return next(error);
  }
};

exports.deleteGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const group = await Groups.get(groupId);

    if (group) {
      await group.remove();

      res.status(httpStatus.OK);
      return res.json('Group Deleted');
    } else {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Cannot remove group',
      });
    }
  } catch (error) {
    return next(error);
  }
};

exports.getGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const group = await Groups.get(groupId);

    if (group) {
      res.status(httpStatus.OK);
      res.json(group.transform());
    } else {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Cannot get group',
      });
    }
  } catch (error) {
    return next(error);
  }
};

exports.getAllGroupsForUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    let groups;
    groups = await Groups.find({ members: { $in: [userId] } });

    if (groups.length > 0) {
      res.status(httpStatus.OK);
      res.json(groups);
    } else {
      res.status(httpStatus.NOT_FOUND);
      res.json("User has no group");
    }
  } catch (error) {
    return next(error);
  }
};
