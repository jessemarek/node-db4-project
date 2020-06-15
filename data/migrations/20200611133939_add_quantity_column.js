
exports.up = function (knex) {
    return knex.schema.table('recipe_ingredient', tbl => {
        tbl.float('quantity')
    })
};

exports.down = function (knex) {
    return knex.schema.table('recipe_ingredient', tbl => {
        tbl.dropColumn('quantity')
    })
};
