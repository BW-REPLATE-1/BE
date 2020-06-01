require("dotenv").config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'sometimes bees sting other bees'
};