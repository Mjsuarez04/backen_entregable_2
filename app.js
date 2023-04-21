const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('./routes/user.routes');
const transferRouter = require('./routes/transfer.routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/v1/user', userRouter);

app.use('/api/v1/transfer', transferRouter);

module.exports = app;
