const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omitBy, isNil } = require("lodash");
const APIError = require("../utils/APIError");

/**
 * Group Schema
 * @private
 */
const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId, // ref: UserSchema
      },
    ],
  },

  // CreatedAt / UpdatedAt - Automatically
  {
    timestamps: true,
  }
);

/**
 * Methods
 */
groupSchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "name", "members", "updatedAt", "createdAt"];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

/**
 * Statics
 */
groupSchema.statics = {
  /**
   * Get group
   *
   * @param {ObjectId} id - The objectId of group.
   * @returns {Promise<Groups, APIError>}
   */
  async get(id) {
    try {
      let group;

      if (mongoose.Types.ObjectId.isValid(id)) {
        group = await this.findById(id).exec();
      }
      if (group) {
        return group;
      }

      throw new APIError({
        message: "Group does not exist",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  /**
   * List groups in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of groups to be skipped.
   * @param {number} limit - Limit number of groups to be returned.
   * @returns {Promise<Groups[]>}
   */
  list({ page = 1, perPage = 30, name }) {
    const options = omitBy({ name }, isNil);

    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },
};

/**
 * @typedef Groups
 */
module.exports = mongoose.model("Groups", groupSchema);
