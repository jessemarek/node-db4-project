
exports.up = function (knex) {
    return knex.schema
        .createTable('recipe', tbl => {
            tbl.increments()

            tbl.string('name', 128).notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments()

            tbl.string('name', 128).notNullable()
        })
        .createTable('recipe_ingredient', tbl => {
            tbl.increments()

            //Foreign Key
            tbl.integer('recipe_id')
                .unsigned()
                .references('recipes.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')

            //Foreign Key
            tbl.integer('ingredient_id')
                .unsigned()
                .references('ingredients.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('instructions', tbl => {
            tbl.increments()

            tbl.string('text').notNullable()

            //Foreign Key
            tbl.integer('recipe_id')
                .unsigned()
                .references('recipes.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe-ingredient')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};