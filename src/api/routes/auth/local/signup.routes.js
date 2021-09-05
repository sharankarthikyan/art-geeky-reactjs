const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');

router.post('/', (req, res) => {
  const requestData = req.body;
  User.findOne({ email: requestData.email }, (err, user) => {
    if (err) {
      return res.send(err);
    }
    if (!user) {
      new User({
        username: requestData.username,
        email: requestData.email,
        password: requestData.password,
      })
        .save()
        .then((user) => {
          return res.send(user);
        });
    } else {
      return res.send(user);
    }
  });
});

module.exports = router;
