var express = require('express');
var router = express.Router();

const User = require('../../../db/models/user/user.model');

router.get('/', (req, res) => {
  res.set('Content-Type', 'application/json');
});

router.post('/', (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((error) => {
      res.send('Error from POST USER -> ' + error);
    });
});

module.exports = router;
