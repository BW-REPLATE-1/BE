const router = require('express').Router();
const VP = require('../models/volunteer-model');

// POST creates new volunteer profile
router.post("/", (req, res) => {
    if (!req.body.username || !req.body.email) {
        return res.status(400).json({
            message: "Please provide username and email for your profile.",
        })
    }
    VP.insert(req.body)
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

// GET all volunteer profiles
router.get("/", (req, res) => {
    VP.get()
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

// GET volunteer profile by id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    VP.findById(id)
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

// PUT update volunteer profile
router.put("/:id", (req, res) => {
    if (!req.body.username || !req.body.email) {
        return res.status(400).json({
            message: "Missing username or email",
        })
    }
    VP.update(req.params.id, req.body)
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

// DELETE removes volunteer profile
router.delete("/:id", (req, res) => {
    VP.remove(req.params.id)
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
