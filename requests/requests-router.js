const router = require('express').Router();
const Requests = require('../models/requests-model');

// POST creates new request
router.post('/', (req, res) => {
    const data = req.body;

    Requests.insert(data)
        .then(request => {
            res.status(201).json(request);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to create new request',
            });
        });
});

// GET all requests
router.get('/', (req, res) => {
    Requests.get()
        .then(requests => {
            res.json(requests);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to retrieve requests',
            });
        });
});

// GET business request by id
router.get('/:id', (req, res) => {
   
    Requests.findBusiness(req.params.id)
        .then(request => {
            res.status(200).json(request);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Failed to retrieve request",
            })
        })
});

// PUT update request by id profile
router.put("/:id", (req, res) => {

    Requests.update(req.params.id, req.body)
        .then(changes => {
            res.status(200).json(changes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Failed to update request"
            })
        })
})

// DELETE removes request 
router.delete("/:id", (req, res) => {
    Requests.remove(req.params.id)
        .then((removed) => {
            if (removed) {
                res.status(204).json(removed)
            } else {
                res.status(404).json({
                    message: "The request with the specified ID does not exist.",
                })
            }
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).json({
                error: "The request could not be removed",
            })
        })
})

module.exports = router;