
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          recipe_id: 1,
          text: "Instructions to make bread"
        },
        {
          recipe_id: 2,
          text: "Instructions to make chocolate cake"
        },
        {
          recipe_id: 3,
          text: "Instructions to make oatmeal cookies"
        },
        {
          recipe_id: 4,
          text: "Instructions to make apple pie"
        }
      ]);
    });
};
