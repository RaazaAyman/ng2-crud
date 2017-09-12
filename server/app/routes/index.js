'use strict';

const usersCtrl = require('./users');

module.exports = app => {
   app.use('/api/users', usersCtrl);
};