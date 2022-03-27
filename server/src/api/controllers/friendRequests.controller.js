const httpStatus = require("http-status");
const FriendRequests = require("../models/friendRequests.model");
const Users = require("../models/user.model");
const APIError = require("../utils/APIError");

exports.createFriendRequest = async (req, res, next) => {
  try {
    const { userId, username } = req.body; // Sender Details from Frontend or JWT
    const { userId: targetUserId } = req.params; // Target User

    if (userId && username) {
      const newRequest = new FriendRequests(req.body);
      const savedRequest = await newRequest.save();

      if (savedRequest) {
        const targetUser = Users.get(targetUserId);
        if (targetUser)
          targetUser.friendRequests = [
            ...targetUser.friendRequests,
            savedRequest._id,
          ];
        await targetUser.save();

        res.status(httpStatus.CREATED);
        res.json(savedRequest.transform());
      }
    } else {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: "Failed to send friend request",
      });
    }
  } catch (error) {
    return next(error);
  }
};

exports.updateFriendRequest = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const { status } = req.query;
    const request = await FriendRequests.get(requestId);

    if (request) {
      const targetUser = Users.get(targetUserId);

      if (targetUser) {
        let tempFriendRequests = [...targetUser.friendRequests];
        const senderRequestIndex = tempFriendRequests.findIndex(
          (val) => val == requestId
        );
        tempFriendRequests.splice(senderRequestIndex, 1);
        targetUser.friendRequests = tempFriendRequests;

        if (status === "accepted") {
          targetUser.friends = [...targetUser.friends, request.userId];
        }
        await targetUser.save();

        request.status = status;

        const savedRequest = await request.save();

        res.status(httpStatus.CREATED);
        res.json(savedRequest.transform());
      } else {
        throw new APIError({
          status: httpStatus.NOT_FOUND,
          message: "Friend Request's User Does Not Exist",
        });
      }
    } else {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: "Friend Request Not Found",
      });
    }
  } catch (error) {
    return next(error);
  }
};

exports.getFriendRequestById = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const friendRequest = await FriendRequests.get(requestId);

    if (friendRequest) {
      res.status(httpStatus.OK);
      res.json(friendRequest.transform());
    } else {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: "Friend Request Not Found",
      });
    }
  } catch (error) {
    return next(error);
  }
};

exports.getAllFriendRequestOfUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const friendRequests = await FriendRequests.find({ userId });

    if (friendRequests.length > 0) {
      res.status(httpStatus.OK);
      res.json(friendRequests);
    } else {
      res.status(httpStatus.NOT_FOUND);
      res.json("User has no friend requests");
    }
  } catch (error) {
    return next(error);
  }
};
