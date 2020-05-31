
const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "j_bbq",
      password: bcrypt.hashSync("password1"),
      email: "jbbq@gmail.com",
      phone_number: 7735551010,
      isBusiness: true
    },
    {
      id: 2,
      username: "shay-popcorn",
      password: bcrypt.hashSync("password2"),
      email: "thekernel@gmail.com",
      phone_number: 3125551212,
      isBusiness: true
    },
    {
      id: 3,
      username: "b_fields",
      password: bcrypt.hashSync("password3"),
      email: "bboy23@yahoo.com",
      phone_number: 3125551313,
      isBusiness: false
    },
    {
      id: 4,
      username: "taylor_j",
      password: bcrypt.hashSync("password3"),
      email: "tayjay@msn.com",
      phone_number: 7085551414,
      isBusiness: false
    },
  ]);
};
