const mongoose = require('mongoose');
const validator = require('validator');

const Article = mongoose.model('Article', {
  userId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  category: {
    type: [String],
  },
  status: {
    type: String,
  },
});

module.exports = Article;
