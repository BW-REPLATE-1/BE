const knex = require('knex');

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development)

//module.exports = knex(knexConfig[process.env.DB_ENV]);