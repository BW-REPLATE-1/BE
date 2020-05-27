const router = require('express').Router();
const BP = require('../models/business-model.js');

// POST creates new business profile
router.post('/', (req, res) => {
  const info = req.body;

  if (!info.business_name) {
    res.status(400).json({
      message: "Please provide business name"
    })
  } else {
    BP.insert("business-profile", info)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: 'Failed to create new profile',
        });
      });
  }
});

// GET all business profiles
router.get("/", (req, res) => {
  BP.get()
    .then(profiles => {
      res.json(profiles);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: 'Failed to retrieve profiles',
      });
    })
});

// GET business profile by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  BP.findById(id)
    .then(profile => {
      if (profile) {
        res.json(profile);
      } else {
        res.status(404).json({
          message: 'Could not find profile with given id.',
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to get profile',
      });
    });
});

// // PUT update business profile
router.put("/:id", (req, res) => {
  if (!req.body.username || !req.body.email) {
    return res.status(400).json({
      message: "Missing username or email",
    })
  }
  BP.update(req.params.id, req.body)
    .then((user) => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({
          message: "The profile could not be found",
        })
      }
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({
        message: "Error updating the profile",
      })
    })
})

// DELETE removes business profile
router.delete("/:id", (req, res) => {
  BP.remove(req.params.id)
    .then((profile) => {
      if (profile) {
        res.status(204).json(profile)
      } else {
        res.status(404).json({
          message: "The profile with the specified ID does not exist.",
        })
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        error: "The profile could not be removed",
      })
    })
})

module.exports = router;

