// local is normal email and password authentication

const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');

router.post('/', (req, res) => {
  const requestData = req.body;
  User.findOne({ email: requestData.email }, (err, user) => {
    if (err) {
      return res.status(401).send({ message: err });
    }
    if (!user) {
      return res
        .status(401)
        .send({ message: 'No user found with this email...' });
    } else {
      if (user.password === requestData.password) {
        return res.status(200).send(user);
      } else {
        return res.status(401).send({ message: 'Invalid credentials' });
      }
    }
  });
});

module.exports = router;
