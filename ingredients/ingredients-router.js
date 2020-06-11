const Ingredients = require('./ingredients-model')

const router = require('express').Router()


router.get('/', (req, res) => {
    Ingredients.getIngredients()
        .then(ingredients => {
            if (ingredients.length) {
                res.status(200).json(ingredients)
            }
            else {
                res.status(404).json({ messasge: "No ingredients found" })
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.mesage })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Ingredients.getIngredientsById(id)
        .then(ingredient => {
            res.status(200).json(ingredient)
        })
        .catch(error => {
            res.status(500).json({ message: error.mesage })
        })
})

router.get('/:id/recipes', (req, res) => {
    const { id } = req.params

    Ingredients.getRecipesByIngredient(id)
        .then(recipes => {
            if (recipes.length) {
                res.status(200).json(recipes)
            }
            else {
                res.status(404).json({ message: "No recipes found!" })
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.mesage })
        })
})

module.exports = router