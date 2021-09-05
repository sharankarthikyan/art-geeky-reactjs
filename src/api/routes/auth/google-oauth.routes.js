const express = require('express');
var router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../../../../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  // done is callback
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('deserial');
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: keys.GOOGLE_OAUTH_SECRET,
      callbackURL: '/api/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // done param is a callback
      User.findOne({ googleId: profile.id }).then((exsitingUser) => {
        if (exsitingUser) {
          done(null, exsitingUser);
        } else {
          const newUser = profile._json;
          new User({
            googleId: profile.id,
            name: newUser.name,
            email: newUser.email,
            profileImage: newUser.picture,
            locale: newUser.locale,
          })
            .save()
            .then((user) => {
              done(null, user);
            });
        }
      });

      console.log(profile);
    }
  )
);

router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/callback', passport.authenticate('google'));

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
