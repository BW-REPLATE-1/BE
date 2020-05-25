
exports.up = function (knex) {
    return knex.schema
        .createTable("requests", request => {
            request.increments();
            request
                .string("food_type", 128)
                .notNullable()
            request
                .integer("food_amount", 128)
                .notNullable();
                request
                .string("description")
                .notNullable()
            request
                .dateTime("pickup_time")
                .notNullable()
            request
                .boolean("completed")
            request
                .integer("business_id")
                .unsigned()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            request
                .integer("assigned_pickup")
                .unsigned()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("requests")
};
