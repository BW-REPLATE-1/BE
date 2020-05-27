const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require("cookie-parser")

// express routers
const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');
const businessProfileRouter = require('../users/business-profiles-router');

// server object
const server = express();

// global middleware 
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use('/api/business-profiles', businessProfileRouter);

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