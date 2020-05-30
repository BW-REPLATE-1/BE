const router = require('express').Router();
const Users = require('./users-model.js');
const restrict = require('../middleware/restrict');

// GET all users
router.get("/", restrict, (req, res) => {
  Users.get()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    })
});

module.exports = router;