const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");
require("dotenv").config();

module.exports = (req, res, next) => {
    const authError = {
        message: "Invalid crendentials",
    }
    const token = req.headers.authorization // where the token value comes from 
    
    if (!token) {
        return res.status(401).json(authError)
    } else {
        jwt.verify(token, secret.jwtSecret, (err, decodedPayload) => {
            if (err) {
                return res.status(401).json(authError)
            } else {
                req.token = decodedPayload
                next()
            }
        })
    }
}

