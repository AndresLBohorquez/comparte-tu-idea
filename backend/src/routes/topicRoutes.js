const express = require('express');
const Topic = require('../models/topicModel');

const topicRouter = express.Router();

topicRouter.get('/', async (req, res) => {
    const topics = await Topic.find();
    res.send(topics);
});

topicRouter.get('/slug/:slug', async (req, res) => {
    const topic = await Topic.findOne({ slug: req.params.slug });
    if (topic) {
        res.send(topic);
    }
    else {
        res.status(404).send({ message: 'Tema no encontrado' });
    }
});

topicRouter.get('/:id', async (req, res) => {
    const topic = await Topics.findById(req.params.id);
    if (topic) {
        res.send(topic);
    }
    else {
        res.status(404).send({ message: 'Tema no encontrado' });
    }
});

topicRouter.post('/create', async (req, res) => {
    try {
        const { name, slug, image, category, subCategory, description, content, rating, numReviews } = req.body
        await Topic.create({ name, slug, image, category, subCategory, description, content, rating, numReviews })
        return res.json({ name, slug, image, category, subCategory, description, content, rating, numReviews })
    } catch (error) {
        return res.status(404)
    }
});

module.exports = topicRouter;