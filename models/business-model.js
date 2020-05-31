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

// function insert(data) {
//     return db('business-profile')
//         .insert(data)
//         .then(id => {
//             return getById(id[0])
//         })
// }

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
function findUserProfileById(userId, id) {
	return db("business-profile")
		.where({ id, user_id: userId })
		.first()
}

// function findUserProfile(userId) {
//     return db("business-profile as b")
//         .join("users as u", "b.user_id", "u.id")
//         .where({ user_id: userId })
//         .select(["b.id", "b.username", "b.email, b.business_name, b.business_address, b.phone_number"])
// }
function insert(data) {
    return db('business-profile as b')
    .join('users as u, b.user_is, u.id')
    .where({user_id: u.id})
        .insert(data)
        .then(id => {
            return getById(id[0])
        })
}