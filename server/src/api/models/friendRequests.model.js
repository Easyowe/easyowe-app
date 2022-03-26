const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omitBy, isNil } = require("lodash");
const bcrypt = require("bcryptjs");
const moment = require("moment-timezone");
const jwt = require("jwt-simple");
const uuidv4 = require("uuidv4");
const APIError = require("../utils/APIError");
const { env, jwtSecret, jwtExpirationInterval } = require("../../config/vars");

/**
 * Friend Request Schema
 * @private
 */
const friendRequestSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 128,
    },
    username: {
      type: String,
      maxlength: 128,
      index: true,
      trim: true,
    },
    profileImage: {
      type: String,
      trim: true,
    },
    friends: [
      {
        userId: mongoose.Schema.Types.ObjectId,
        username: String,
      },
    ],
    balance: {
      type: Number,
      default: 0,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    // accessToken,
    // github
    // google
    groupId: [
      {
        type: mongoose.Schema.Types.ObjectId, // ref GroupSchema
      },
    ],
    splitId: [
      {
        type: mongoose.Schema.Types.ObjectId, // ref SplitsSchema
      },
    ],
    friendRequests: [
      {
        type: mongoose.Schema.Types.ObjectId, // ref: FriendRequestSchema
      },
    ],
    score: {
      type: Number,
      default: 5.0,
    },
  },

  // CreatedAt / UpdatedAt - Automatically
  {
    timestamps: true,
  }
);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
userSchema.pre("save", async function save(next) {
  try {
    if (!this.isModified("password")) return next();

    const rounds = env === "test" ? 1 : 10;

    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;

    return next();
  } catch (error) {
    return next(error);
  }
});

/**
 * Methods
 */
userSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      "id",
      "username",
      "score",
      "email",
      "profileImage",
      "friends",
      "balance",
      "isEmailVerified",
      "groupId",
      "splitId",
      "friendRequests",
      "createdAt",
    ];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },

  token() {
    const payload = {
      exp: moment().add(jwtExpirationInterval, "minutes").unix(),
      iat: moment().unix(),
      sub: this._id,
    };
    return jwt.encode(payload, jwtSecret);
  },

  async passwordMatches(password) {
    return bcrypt.compare(password, this.password);
  },
});

/**
 * Statics
 */
userSchema.statics = {
  /**
   * Get user
   *
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  async get(id) {
    try {
      let user;

      if (mongoose.Types.ObjectId.isValid(id)) {
        user = await this.findById(id).exec();
      }
      if (user) {
        return user;
      }

      throw new APIError({
        message: "User does not exist",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list({ page = 1, perPage = 30, name, email, role }) {
    const options = omitBy({ name, email, role }, isNil);

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
module.exports = mongoose.model("FriendRequests", userSchema);
