const express = require('express');
const path = require('path');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./src/db/mongoose');

var defaultPath = './src/api/routes';
var userRouter = require(`${defaultPath}/user/user.routes`);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Comment below code while check sever and client in production

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Comment above code while check sever and client in production

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
} else if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.join(__dirname, 'src', 'api', 'routes')));
}

module.exports = app;

const PORT = process.env.PORT || 3000;
app.listen(PORT);
