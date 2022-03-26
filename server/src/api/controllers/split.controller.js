const httpStatus = require('http-status');
const Groups = require('../models/groups.model');
const APIError = require('../utils/APIError');
const Split = require('../models/splits.model');

exports.createSplit = async (req, res, next) => {
  try {
    let { name, category, image, creator, people, amount, type, isDeleted } = req.body;

    if (!people && !amount) {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Need at least one userId',
      });
    }

    if (type == 'group') {
        // people : groupId
      const group = await Groups.get(people);
      people = group.members;
      //console.log({group})
    }

    const newSplit = new Split({
      name,
      category,
      image,
      creator,
      people,
      amount,
      type,
    });
    const saveSplit = await newSplit.save();
    res.status(httpStatus.CREATED);
    res.json(saveSplit.transform());
  } catch (error) {
    return next(error);
  }
};

exports.getSplit = async (req, res, next) => {
  try {
    const { splitId } = req.params;
    console.log(splitId);
    const split = await Split.get(splitId);

    if (split) {
      res.status(httpStatus.OK);
      res.json(split.transform());
    } else {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Cannot get split',
      });
    }
  } catch (error) {
    return next(error);
  }
};

exports.getAllSplitsOfCreator = async (req, res, next) => {
  try {
    const { creatorId } = req.params;
    console.log(creatorId);

    if (creatorId) {
      let splits = await Split.find({ creator: creatorId });

      if (splits.length > 0) {
        res.status(httpStatus.OK);
        res.json(splits);
      } else {
        res.status(httpStatus.NOT_FOUND);
        res.json('Creator has no split');
      }
    } else {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'CreatorId needed',
      });
    }
  } catch (error) {
    return next(error);
  }
};

exports.updateSplit = async (req, res, next) => {
  try {
    let { name, category, image, creator, people, amount, type, isDeleted } = req.body;

    const { splitId } = req.params;

    if (!people && !amount) {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Need at least one userId',
      });
    }

    if (type == 'group') {
      const group = await Groups.get(people);
      people = group.members;
      //console.log({group})
    } else if (type == 'friends') {
    }

    const saveSplit = await Split.findOneAndUpdate(
      { _id: splitId },
      { name, category, image, creator, people, amount, type, isDeleted },
      { returnOriginal: false }
    );

    res.status(httpStatus.CREATED);
    res.json(saveSplit);
  } catch (error) {
    return next(error);
  }
};

exports.getAllSplitsOfPeople = async (req, res, next) => {
  try {
    const { peopleId } = req.params;

    let splits = await Split.find({ people: { $in: [peopleId] } });

    if (splits.length > 0) {
      res.status(httpStatus.OK);
      res.json(splits);
    } else {
      res.status(httpStatus.NOT_FOUND);
      res.json('Person has no split');
    }
  } catch (error) {
    return next(error);
  }
};
