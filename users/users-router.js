const router = require('express').Router();
const Users = require('./users-model.js');
const BP = require('../models/business-model.js');

// GET all users
router.get("/", (req, res) => {
  Users.get()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    })
});

// GET business profile by id
router.get('/:id/business-profile', (req, res) => {
  const { id } = req.params;
  Users.getUser(id)

    .then(profile => {
      if (profile) {
        res.status(200).json(profile)
      } else {
        res.status(404).json({ message: 'error' })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ message: 'Failed to retrieve business profile' })
    })
})

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Users.getUser(id)
//       .then(profile => {
//           if (profile) {
//               BP.update(changes, id)
//                   .then(updatedProfile => {
//                       res.json(updatedProfile);
//                   });
//           } else {
//               res.status(404).json({ message: 'Could not find profile with given id' });
//           }
//       })
//       .catch(err => {
//           res.status(500).json({ message: 'Failed to update profile' });
//       });
// });

module.exports = router;