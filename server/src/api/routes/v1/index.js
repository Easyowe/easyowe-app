const express = require("express");
const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");
const groupRoutes = require("./group.route");
const splitRoutes = require("./splits.route");
const friendRequestsRoutes = require("./friendRequests.route");

const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.send("OK"));

/**
 * GET v1/docs
 */
router.use("/docs", express.static("docs"));

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/group", groupRoutes);
router.use("/split", splitRoutes);
router.use("/friend-requests", friendRequestsRoutes);

module.exports = router;
