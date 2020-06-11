
exports.up = function (knex) {
    return knex.schema
        .createTable('recipe', tbl => {
            tbl.increment()

            tbl.string('name', 128).notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increment()

            tbl.string('name', 128).notNullable()
        })
        .createTable('recipe_ingredient', tbl => {
            tbl.increment()

            tbl.integer('recipe_id')
                .unsigned()
                .references('recipes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.integer('ingredient_id')
                .unsigned()
                .references('ingredients.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('instructions', tbl => {
            tbl.increment()

            tbl.string('text').notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe-ingredient')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
