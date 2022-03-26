const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omitBy, isNil } = require("lodash");

const APIError = require("../utils/APIError");

/**
 * Splits Schema
 * @private
 */
const splitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    category: {
      type: [String],
      //default: ["Food", "Grocery", "Transportation"],
    },
    image: {
      type: String,
      trim: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    people: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    // Set to Delete once it has been completed
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },

  // CreatedAt / UpdatedAt - Automatically
  {
    timestamps: true,
  }
);

/**
 * Methods
 */
splitSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      "id",
      "name",
      "category",
      "image",
      "creator",
      "people",
      "amount",
      "isDeleted",
      "createdAt",
      "updatedAt",
    ];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

/**
 * Statics
 */
splitSchema.statics = {
  /**
   *
   * @param {ObjectId} id - The objectId of Splits.
   * @returns {Promise<Splits, APIError>}
   */
  async get(id) {
    try {
      let split;

      if (mongoose.Types.ObjectId.isValid(id)) {
        split = await this.findById(id).exec();
      }
      if (split) {
        return split;
      }

      throw new APIError({
        message: "This Split does not exist",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  /**
   * List splits in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of splits to be skipped.
   * @param {number} limit - Limit number of splits to be returned.
   * @returns {Promise<Splits[]>}
   */
  list({ page = 1, perPage = 30, creator }) {
    const options = omitBy({ creator }, isNil);

    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },
};

/**
 * @typedef Splits
 */
module.exports = mongoose.model("Split", splitSchema);
