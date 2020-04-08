const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  user_id: String,
  level: String,
  role: String
});

mongoose.model('User', userSchema);
