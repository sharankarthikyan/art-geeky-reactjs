const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017/art-geeky-react';

mongoose.connect(connectionURL).catch((error) => {
  console.log('MongoDB connect not established........');
});
