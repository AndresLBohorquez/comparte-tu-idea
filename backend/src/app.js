const express = require('express');
const datafull = require('../data.json');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/topics', (req, res) => {
    res.send(datafull.topics);
})

app.get('/api/topics/slug/:slug', (req, res) => {
    const topic = datafull.topics.find((x) => x.slug === req.params.slug);
    if (topic) {
        res.send(topic);
    }
    else {
        res.status(404).send({ message: 'Tema no encontrado' });
    }
});




//configuraciones
app.set('port', process.env.PORT || 5001)

//Middlewares

//Routes

module.exports = app;