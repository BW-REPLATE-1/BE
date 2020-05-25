
exports.seed = function (knex) {
  return knex("volunteer-profile").insert([
    {
      id: 1,
      username: "b_fields",
      email: "bboy23@yahoo.com",
      volunteer_name: "Byron Fields",
      phone_number: 3125551313,
      user_id: 3
    },
    {
      id: 2,
      username: "taylor_j",
      email: "tayjay@msn.com",
      volunteer_name: "Taylor Johnson",
      phone_number: 7085551414,
      user_id: 4
    }
  ]);
};
