const router = require('express').Router();
const Users = require('./users-model.js');
//const restricted = require("../middleware/restricted");

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