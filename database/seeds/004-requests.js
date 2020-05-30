
exports.seed = function (knex) {
  return knex("requests").insert([
    {
      id: 1,
      food_type: "pulled pork",
      food_amount: 4,
      description: "4 pans of bbq pulled pork",
      pickup_time: "2019-07-03 22:00:00",
      business_address: "391 Riverside Ave. Chicago, IL 606019",
      completed: true,
      business_id: 1,
      assigned_pickup: 2
    },
    {
      id: 2,
      food_type: "popcorn",
      food_amount: 5,
      description: "5lbs of chi-town mix popcorn (caramel & cheese)",
      pickup_time: "2019-11-15 21:30:00",
      business_address: "223 Hilldale Dr. Chicago, IL 606012",
      completed: false,
      business_id: 2
    }
  ]);
};

