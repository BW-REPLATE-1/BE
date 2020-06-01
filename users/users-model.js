const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig.js");
require("dotenv").config();

function get() {
    return db("users").select("username");
}

function findBy(filter) {
    return db("users").where(filter);
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");
    user.password = await bcrypt.hash(user.password, 14)

    return findById(id);
}
    
function findById(id) {
    return db("users")
        .where({ id })
        .first();
}

function getUser(id) {
    return db('business-profile as b')
        .join('users as u', 'u.id', 'b.user_id')
        .where('b.user_id', id)
        .select(
            'b.id',
            'b.username',
            'b.email',
            'b.business_name',
            'b.business_address',
            'b.phone_number',
            'b.user_id'
            )
}

function update(id, changes){
    return db('business-profile')
    .where('id', id)
    .update(changes)

}
module.exports = {
    add,
    get,
    findBy,
    findById,
    getUser,
    update
};
