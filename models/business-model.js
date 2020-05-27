// const bcrypt = require("bcryptjs");
// const db = require("../database/dbConfig.js");
// require("dotenv").config();

module.exports = {
    get,
    insert,
    findById,
    remove,
    update
};

function get() {
    return db('users')
}

function insert(data) {
    return db('users')
    .insert(data)
}

function findById(id) {
    return db('users')
    .where('id', id)
}

function update(id, changes){
    return db('users')
    .where('id', id)
    .update(changes)

}

function remove(id){
    return db('users')
    .where('id', id)
    .del()
}