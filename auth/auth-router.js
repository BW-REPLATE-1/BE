const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require("../config/secrets");
require("dotenv").config();

const router = require('express').Router();

const Users = require("../users/users-model");

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const secret = secrets.jwtSecret
    const options = {
        expiresIn: "1h"
    }
    return jwt.sign(payload, secret, options);
}

router.post('/register', (req,res) => {
    let user = req.body;
    //const rounds = process.env.HASH_ROUTER;
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;

    Users.add(user).then(saved => {
        res.status(201).json(saved);

    }).catch(error =>{
        res.status(500).json({errormessage: error.message})
    })

})

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    //console.log(req.body);

    Users.findBy({ username })
        .first()
        .then(user => {
            console.log(user)
            if (user && bcrypt.compareSync(password, user.password)) {
                //console.log(password, user.password)
                const token = generateToken(user)

                res.status(200).json({
                    message: `Hello ${user.username}!`,
                    token
                });
            } else {
                res.status(401).json({
                    message: 'Invalid Credentials!'
                });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
})
module.exports = router; 
