
exports.up = function (knex) {
    return knex.schema.table('recipe_ingredient', tbl => {
        tbl.integer('quantity').unsigned()
    })
};

exports.down = function (knex) {
    return knex.schema.table('recipe_ingredient', tbl => {
        tbl.dropColumn('quantity')
    })
};
