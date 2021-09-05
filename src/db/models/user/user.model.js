const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  username: {
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
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('1234')) {
        throw new Error("Don't give password with 1234");
      }
    },
  },
  googleId: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  locale: {
    type: String,
  },
});

module.exports = User;
