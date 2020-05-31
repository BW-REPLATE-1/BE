const router = require('express').Router();
const BP = require('../models/business-model');
const requests = require('../models/requests-model');

// POST creates new business profile
router.post("/", (req, res) => {
  if (!req.body.username || !req.body.email) {
    return res.status(400).json({
      message: "Please provide username and email for your profile.",
    })
  } 
  BP.insert(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        message: "There was an error while saving the profile to the database",
      })
    })
})

// POST business can create a new request
router.post('/:id/request', (req, res) => {
  if (!req.body.food_type && req.body.pickup_time && req.body.business_address) {
    return res.status(400).json({
      message: "Missing content .",
    })
  }
  requests.insert(req.body)
    .then(() => {
      res.status(201).json({
        message: "Request created!"
      });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: 'Failed to create new request',
      });
    });
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
router.get('/:id',(req, res) => {
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

// GET requests by business id
router.get('/:id/requests', (req, res) => {
  const { id } = req.params;

  requests.findBusiness(id)
    .then(request => {
      if (request) {
        res.json(request);
      } else {
        res.status(404).json({
          message: 'Could not find request with given id.',
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to get request',
      });
    });
});

// PUT update business profile
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
        error: "This profile could not be removed",
      })
    })
})

module.exports = router;
