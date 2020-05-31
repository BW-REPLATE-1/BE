
exports.seed = function (knex) {
  return knex("business-profile").insert([
    {
      id: 1,
      username: "j_bbq",
      email: "jbbq@gmail.com",
      business_name: "Jay's BBQ",
      business_address: "391 Riverside Ave. Chicago, IL 606019",
      phone_number: 7735551010
    },
    {
      id: 2,
      username: "shay-popcorn",
      email: "thekernel@gmail.com",
      business_name: "The Kernel",
      business_address: "223 Hilldale Dr. Chicago, IL 606012",
      phone_number: 3125551212
    }
  ]);
};
