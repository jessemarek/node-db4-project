const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

async function getRecipeById(id) {
    const ingredients = await db('recipe_ingredient as ri')
        .where('ri.recipe_id', id)
        .join('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
        .select('i.name', 'ri.quantity')

    const recipe = await db('instructions as i')
        .join('recipes as r', 'i.recipe_id', '=', 'r.id')
        .select('r.id', 'r.name', 'i.text as instructions')
        .first()

    return {
        id,
        recipe: recipe.name,
        ingredients,
        instructions: recipe.instructions
    }
}

function getShoppingList(id) {
    return db('recipe_ingredient as ri')
        .where('ri.recipe_id', id)
        .join('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
        .select('i.name', 'ri.quantity')
}

function getInstructions(id) {
    return db('instructions as i')
        .join('recipes as r', 'i.recipe_id', '=', 'r.id')
        .where('i.recipe_id', id)
        .select('i.text as instructions')
}