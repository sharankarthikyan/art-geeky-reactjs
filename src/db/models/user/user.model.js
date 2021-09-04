const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  password: {
    type: String,
    require: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('1234')) {
        throw new Error("Don't give password with 1234");
      }
    },
  },
});

module.exports = User;