const mongoose = require('mongoose');

const connectionURL =
  'mongodb+srv://dhinakarDB:dhinakarDB@cluster0.jdcbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connectionURL).catch((error) => {
  console.log('MongoDB connect not established........');
});
