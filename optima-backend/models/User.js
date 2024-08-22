const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  mobileNumber:{
    type:Number
  },
  city:{
    type:String
  },
  profileImage: { type: String, default: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg' }
});

module.exports = mongoose.model('User', UserSchema);
