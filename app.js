require("dotenv").config()
const cors = require("cors")

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// error handling middleware
app.use((req, res, next) => {
    const error = new Error("Path not found")
    error.statusCode = 404;
    next(error);
})

// error handling middleware express
app.use((err, req, res, next) => {
    res.status(statusCode).send(err.message)
})

module.exports = app;   
