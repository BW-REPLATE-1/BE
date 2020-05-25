const router = require('express').Router();
const Users = require('./users-model.js');

router.get("/", (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
  });
  
  module.exports = router;