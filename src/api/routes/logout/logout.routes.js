const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
