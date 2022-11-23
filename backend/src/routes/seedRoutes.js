const express = require('express');
const Topic = require('../models/topicModel.js');
const User = require('../models/userModel.js');

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
    const createTopics = await Topic.find();
    const createUsers = await User.find();
    res.json({ createTopics, createUsers });
});

module.exports = seedRouter;