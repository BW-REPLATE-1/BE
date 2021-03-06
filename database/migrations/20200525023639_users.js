
exports.up = function (knex) {
    return knex.schema
        .createTable("users", user => {
            user.increments();
            user
                .string("username", 128)
                .notNullable()
                .unique();
            user
                .string("password", 128)
                .notNullable();
            user
                .string("email", 128)
                .notNullable()
                .unique()
            user
                .integer("phone_number")
                .notNullable()
                .unique();
            user
                .boolean("isBusiness")
                .notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("users")
};