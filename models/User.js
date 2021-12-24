const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type : String,
      required:true,
    },
    email: {
      type: String,
      required: true,
    },
    password: { 
      type: String,
    },
    avatar: {
      type: String,
    }
  });
  
  const User = mongoose.model('User', UserSchema);
  module.exports = User;