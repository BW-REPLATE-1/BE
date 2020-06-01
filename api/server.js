const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require("dotenv").config();

// express routers
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const businessProfileRouter = require('../users/business-profiles-router');
const volunteerProfileRouter = require('../users/volunteer-profiles-router');
const requestsRouter = require('../requests/requests-router');

const authenticate = require('../middleware/authenticate');

// server object
const server = express();

// global middleware 
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, usersRouter);
server.use('/api/business-profiles', authenticate, businessProfileRouter);
server.use('/api/volunteer-profiles', authenticate, volunteerProfileRouter);
server.use('/api/requests', authenticate, requestsRouter);

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