'use strict';
const express = require('express');
const User = require('../models/user');
const router = express.Router();

function generateResponse(message, isSuccess) {
  const resData = {
    message: message,
    success: isSuccess
  };

  return resData;
}



router.route('/')

  /*
   * Will Return All Existing Users.
   */

  .get((req, res) => {

    User.find({}, (error, users) => {
      if (error) return next(error);
      res.json({isSuccess: true, users});
    })

  })

  /*
   * Will Create New User.
   */

  .post((req, res) => {

    const {
      name,
      email
    } = (req.body || {});
    // console.log(body)
    let resData = {};

    if (!name) {
      const error = new Error('User Name Fileld Should Exist');
      return next(error);
    }

    if (!email) {
      const error = new Error('User Email Fileld Should Exist');
      return next(error);
    }

    const user = new User({name, email});
    user.save((error, user) => {
      if (error) return next(error);
      res.json({isSuccess: true, user})
    })

  })


router.route('/:userId')

  /*
   * Will Return User With Id Value userId.
   */

  .get((req, res) => {
    const userId = req.params.userId;
    let resData = {};

    if (userId) {
      User.findOne({ id: userId }, (err, user) => {
        if (err) return console.log(err);
        if (user) {
          resData = generateResponse(undefined, true)
          resData.user = user;
        } else {
          const message = 'USER NOT FOUND';
          resData = generateResponse(message, false)
        }
        res.json(resData);

      })
    } else {
      const message = 'BAD REQUEST: USER ID MUST BE PROVIDED';
      resData = generateResponse(message, false)
      res.json(resData);
    }

  })

  /*
   * Will Update User Details..
   */

  .put((req, res) => {
    const userId = req.params.userId;
    const body = req.body;

    if (body && body.name && body.email) {
      const query = { id: userId };
      const update = {
        name: body.name,
        email: body.email
      };

      User.findOneAndUpdate(query, update, (err, user) => {
        if (err) return console.log(err);
        // Here user contains document value befor updating it..
        const message = 'successfully updated';
        const resData = generateResponse(message, true);
        res.json(resData);
      })
    } else {
      const message = 'Bad Request';
      const resData = generateResponse(message, false)
      res.json(resData);
    }

  })

  /*
   * Will Delete User With Id Value userId.
   */

  .delete((req, res) => {
    const userId = req.params.userId;

    if (userId) {
      User.findOneAndRemove({ id: userId }, (err, doc) => {
        if (err) return console.log(err);
        // console.log(doc)
        const message = `successfully deleted user named ${doc.name}`;
        const resData = generateResponse(message, true);
        res.json(resData);
      })
    } else {
      const message = `BAD REQUEST: USER ID MUST BE PROVIDED`;
      const resData = generateResponse(message, false);
      res.json(resData);
    }
  })

router.use((error, req, res, next) => {
  const { message } = error;
  console.error(error);
  res.json({ isSuccess: false, message });
})

module.exports = router;
