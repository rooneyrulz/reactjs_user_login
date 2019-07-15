import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },

  name: {
    type: String,
    /* match:  var nameRegex = /^[a-zA-Z\-]+$/ */
    required: [true, 'name is required!'],
  },

  username: {
    type: String,
    unique: true,
    match: /^[a-zA-Z0-9]+$/,
    required: [true, 'username is required!'],
  },

  email: {
    type: String,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    required: [true, 'email is required!'],
  },

  password: {
    type: String,
    required: [true, 'password is required!'],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

export default model('Users', userSchema);
