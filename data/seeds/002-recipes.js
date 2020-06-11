
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: "bread"
        },
        {
          name: "chocolate cake"
        },
        {
          name: "oatmeal cookies"
        },
        {
          name: "apple pie"
        }
      ]);
    });
};
