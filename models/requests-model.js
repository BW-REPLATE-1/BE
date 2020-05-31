const db = require("../database/dbConfig.js");
require("dotenv").config();

module.exports = {
    get,
    insert,
    findById,
    remove,
    update,
    findBusiness
};

function get() {
    return db("requests")
}

function insert(data) {
    return db('requests')
        .insert(data)
        .then(id => {
            return findById(id[0])
        })
}

function findById(id) {
    return db("requests")
        .where({ id })
        .first()
}

/*SELECT b.id, r.food_type, r.food_amount, r.description, r.pickup_time, r.business_address, r.completed, r.business_id, r.assigned_pickup
FROM requests as r
JOIN business_profile as b
on r.business_id = b.id;*/

function findBusiness(business_id) {
    return db("requests as r")
        .join("business-profile as b", "b.user_id", "r.business_id")
        .where('business_id', business_id)
        .first()
        .select(
            "b.id",
            "r.food_type",
            "r.food_amount",
            "r.description",
            "r.pickup_time",
            "r.business_address",
            "r.completed",
            "r.business_id",
            "r.assigned_pickup"
        )
}

function update(id, changes) {
    return db("requests")
        .where('id', id)
        .update(changes)
}

function remove(id) {
    return db("requests")
        .where('id', id)
        .del()
}


