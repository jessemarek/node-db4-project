const db = require('../data/db-config')

module.exports = {
    getIngredients,
    getIngredientsById,
    getRecipesByIngredient
}

function getIngredients() {
    return db('ingredients')
}

function getIngredientsById(id) {
    return db('ingredients')
        .where('id', id)
        .first()
}

function getRecipesByIngredient(id) {
    return db('recipe_ingredient as ri')
        .where('ri.ingredient_id', id)
        .join('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
        .join('recipes as r', 'ri.recipe_id', '=', 'r.id')
        .select('r.name as recipe', 'ri.quantity', 'i.name as ingredient')

}