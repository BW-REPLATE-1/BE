const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// server object
const server = express();

// global middleware 
server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res, next) => {
    res.json({
        message: "Hello from Replate",
    })
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server; 