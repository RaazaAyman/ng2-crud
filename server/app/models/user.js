'use strict';

const uuid         = require('uuid');
const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const UserSchema   = new Schema({
	id: { type: String, default: uuid },
    name: String,
    email: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;