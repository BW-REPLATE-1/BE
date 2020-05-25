
exports.up = function (knex) {
    return knex.schema
        .createTable("business-profile", business => {
            business.increments();
            business
                .string("username", 128)
                .notNullable()
                .unique();
            business
                .string("email", 128)
                .notNullable()
                .unique()
            business
                .string("business_name", 128)
                .notNullable();
            business
                .string("business_address")
                .notNullable()
            business
                .integer("phone_number")
                .notNullable()
            business
                .integer("user_id")
                .unsigned()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("business-profile")
};
