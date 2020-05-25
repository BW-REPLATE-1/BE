const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig.js");
require("dotenv").config();

module.exports = {
    add,
    find,
    findBy,
    findById,
};

async function add(user) {
    const rounds = process.env.HASH_ROUTER;
    user.password = await bcrypt.hash(user.password, rounds)

    const [id] = await db("users").insert(user, "id");
    return findById(id);
}

function find() {
    return db("users")
}

function findBy(filter) {
    return db("users")
        .select("id", "username", "password")
        .where(filter)
}

function findById(id) {
    return db("users")
        .where({ id })
        .first();
}
