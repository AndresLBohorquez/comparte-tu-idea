const express = require('express');
const datafull = require('../data.json');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/topics', (req, res) =>{
    res.send(datafull.topics);
})

//configuraciones
app.set('port', process.env.PORT || 5000)

//Middlewares

//Routes

module.exports = app;