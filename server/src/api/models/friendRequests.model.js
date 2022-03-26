const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omitBy, isNil } = require("lodash");

const APIError = require("../utils/APIError");

/**
 * Friend Request Schema
 * @private
 */
const friendRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // ref: userSchema
      required: true,
    },

    username: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["accepted", "pending", "rejected"],
      default: "pending",
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
friendRequestSchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "userId", "username", "status"];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

/**
 * Statics
 */
friendRequestSchema.statics = {
  /**
   *
   * @param {ObjectId} id - The objectId of friendRequest.
   * @returns {Promise<FriendRequests, APIError>}
   */
  async get(id) {
    try {
      let friendRequest;

      if (mongoose.Types.ObjectId.isValid(id)) {
        friendRequest = await this.findById(id).exec();
      }
      if (friendRequest) {
        return friendRequest;
      }

      throw new APIError({
        message: "Friend Request does not exist",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  /**
   * List friend requests in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of friend requests to be skipped.
   * @param {number} limit - Limit number of friend requests to be returned.
   * @returns {Promise<FriendRequests[]>}
   */
  list({ page = 1, perPage = 30, userId }) {
    const options = omitBy({ userId }, isNil);

    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },
};

/**
 * @typedef FriendRequests
 */
module.exports = mongoose.model("FriendRequests", friendRequestSchema);
