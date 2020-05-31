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
    return db('volunteer-profile')
}

function insert(data) {
    return db('volunteer-profile')
        .insert(data)
        .then(id => {
            return findById(id[0])
        })
}

function findById(id) {
    return db("volunteer-profile")
        .where('id', id)
        .first()
}

async function update(id, changes) {
    await db('volunteer-profile')
        .where('id', id)
        .update(changes)

    return findById
}

function remove(id) {
    return db('volunteer-profile')
        .where('id', id)
        .del()
}
function findUserProfileById(userId, id) {
	return db("volunteer-profile")
		.where({ id, user_id: userId })
		.first()
}