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

  .get((req, res, next) => {

    User.find({}, (error, users) => {
      if (error) return next(error);
      res.json({ isSuccess: true, users });
    })

  })

  /*
   * Will Create New User.
   */

  .post((req, res, next) => {

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

    const user = new User({ name, email });
    user.save((error, user) => {
      if (error) return next(error);
      res.json({ isSuccess: true, user })
    })

  })


router.route('/:userId')

  /*
   * Will Return User With Id Value userId.
   */

  .get((req, res, next) => {
    const { userId } = (req.params || {});

    if (!userId) {
      const error = new Error('User Id Should Not Be Empty');
      return next(error);
    }

    User.findOne({ id: userId }, (error, user) => {
      if (error) {
        console.error(error);
        return next(error);
      }

      if (!user) {
        const error = new Error('User Not Exist');
        return next(error);
      }

      res.json({ isSuccess: true, user });



    })

  })

  /*
   * Will Update User Details..
   */

  .put((req, res, next) => {
    const { userId } = (req.params || {});
    const body = req.body;

    if (body && body.name && body.email) {
      const query = { id: userId };
      const update = {
        name: body.name,
        email: body.email
      };

      User.findOneAndUpdate(query, update, (error, user) => {
        if (error) return console.log(error);
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

  .delete((req, res, next) => {
    const userId = (req.params || {});

    if (!userId) {
      const error = new Error('User Id Should Not Be Empty');
      console.error(error);
      return next(error);
    }

    User.findOneAndRemove({ id: userId }, (error, doc) => {
      if (error) {
        return next(error);
      }
      res.json({ isSuccess: true, user: doc });
    })
  })


// Error Handling Middleware...

router.use((error, req, res, next) => {
  const { message } = error;
  console.error(error);
  res.json({ isSuccess: false, message });
})

module.exports = router;
