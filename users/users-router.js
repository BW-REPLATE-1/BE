const router = require('express').Router();
const Users = require('./users-model.js');

// GET all users
router.get("/",( req, res) => {
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