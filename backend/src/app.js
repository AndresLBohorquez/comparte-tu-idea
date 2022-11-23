const express = require('express');
const cors = require('cors');
const seedRouter = require('./routes/seedRoutes.js');
const topicRouter = require('./routes/topicRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//Middlewares
app.use(cors());

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Routes
app.use('/api/seed', seedRouter);
app.use('/api/topics', topicRouter);
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

//Configuraciones
app.set('port', process.env.PORT || 5001)



module.exports = app;