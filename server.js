const express = require('express');
const path = require('path');
const app = express();

app.get('/api/users', (req, res) => {
  console.log('REQ');
  console.log(req);
  res.set('Content-Type', 'application/json');
  res.send({ h1: 'hello' });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;
app.listen(PORT);
