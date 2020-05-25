const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig.js");
require("dotenv").config();

function find() {
    return db("users").select("id", "username");
}

function findBy(filter) {
    return db("users").where(filter);
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");
    const rounds = process.env.HASH_ROUTER;
    user.password = await bcrypt.hash(user.password, rounds)

    return findById(id);
}
    //     const rounds = process.env.HASH_ROUTER;
    //     user.password = await bcrypt.hash(user.password, rounds)
    //     user.password = await bcrypt.hash(user.password, 10)
    
    //     const [id] = await db("users").insert(user, "id");
    //     return findById(id);

function findById(id) {
    return db("users")
        .where({ id })
        .first();
}

module.exports = {
    add,
    find,
    findBy,
    findById,
};
