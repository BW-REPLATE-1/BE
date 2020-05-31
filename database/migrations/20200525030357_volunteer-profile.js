
exports.up = function (knex) {
    return knex.schema
        .createTable("volunteer-profile", volunteer => {
            volunteer.increments();
            volunteer
                .string("username", 128)
                .notNullable()
                .unique();
            volunteer
                .string("email", 128)
                .notNullable()
                .unique()
            volunteer
                .string("volunteer_name", 128)
                .notNullable();
            volunteer
                .integer("phone_number")
                .notNullable()
            volunteer
                .integer("user_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("volunteer-profile")

};