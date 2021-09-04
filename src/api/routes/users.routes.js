var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  console.log('REQ');
  console.log(req);
  res.set('Content-Type', 'application/json');
  res.send({ h1: 'hello' });
});

module.exports = router;
