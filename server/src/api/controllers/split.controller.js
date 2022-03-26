const httpStatus = require('http-status');
const Groups = require('../models/groups.model');
const APIError = require('../utils/APIError');
const Split = require('../models/splits.model');

exports.createSplit = async (req, res, next) => {
  try {
    let { name, category, image, creator, people, amount, type } = req.body;

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

    } 
    else if (type == 'friends') {
        
    }

    const newSplit = new Split({ name, category, image, creator, people, amount, type });
    const saveSplit = await newSplit.save();
    res.status(httpStatus.CREATED);
    res.json(saveSplit.transform());

  } catch (error) {
    return next(error);
  }
};
