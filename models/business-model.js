const db = require("../database/dbConfig.js");
require("dotenv").config();

module.exports = {
    get,
    insert,
    findById,
    remove,
    update,
    findUserProfileById
};

function get() {
    return db('business-profile')
}

async function insert(data) {
    const [id] = await db("business-profile").insert(data);
    return db('business-profile').where({ id })
}

function findById(id) {
    return db("business-profile")
        .where('id', id)
        .first()
}

async function update(id, changes) {
    await db('business-profile')
        .where('id', id)
        .update(changes)

    return findById
}

function remove(id) {
    return db('business-profile')
        .where('id', id)
        .del()
}
function findUserProfileById(user_id) {
    return db("business-profile")
        .where({ user_id })
        .first()
}
