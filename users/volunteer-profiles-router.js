const router = require('express').Router();
const VP = require('../models/volunteer-model');

router.get('/', (req, res) => {
    VP.get()
      .then((users) => {
        res.status(200).json(users)
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "Error retrieving volunteers.",
        })
      })
  });