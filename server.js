const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const passport = require('passport');
require('./src/db/mongoose');

const keys = require('./config/keys');

const defaultPath = './src/api/routes';

/* ------ Importing router from API folder ------ */
// App Business logic core APIs
const userRouter = require(`${defaultPath}/user/user.routes`);

// Auth based routes
const googleOauthRouter = require(`${defaultPath}/auth/google-oauth.routes`);

const logoutRouter = require(`${defaultPath}/logout/logout.routes`);

/* ------ Express App ------ */
const app = express();

/* ------ Including middleware to our Express app ------ */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* ------ Session ------ */
// Creating session for user
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  })
);

// We need to initialize and make a session after cookie session
app.use(passport.initialize());
app.use(passport.session());

/* ------ Buisness Logic ------ */
// App Business logic core APIs
app.use('/api/user', userRouter);

/* ------ Auth Routes ------ */
// Auth based routes
app.use('/api/auth/google', googleOauthRouter);

app.use('/api/logout', logoutRouter);

/* ------ Comment below code while check sever and client in production ------ */
// Some tips if you are authenticated succefully, then if you try to access callback url manually, url will not work. If you are getting errors comment the below error handling code.
// catch 404 and forward to error handler

// app.use(function (req, res, next) {
//   next(createError(404));
// });
// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

/* ------ Comment above code while check sever and client in production ------ */

// Checking for production or dev
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
