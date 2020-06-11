const router = require('express').Router()

const Recipes = require('./recipes-model')

//Get a list of recipes in the db
router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            if (recipes.length) {
                res.status(200).json(recipes)
            }
            else {
                res.status(404).json({ message: "Recipes not found" })
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.mesage })
        })
})

//Get a list of ingredients for a specific recipe
router.get('/:id/shoppinglist', (req, res) => {
    const { id } = req.params

    Recipes.getShoppingList(id)
        .then(list => {
            res.status(200).json(list)
        })
        .catch(error => {
            res.status(500).json({ message: error.mesage })
        })
})

//Get the instructions for a specific recipe
router.get('/:id/instructions', (req, res) => {
    const { id } = req.params

    Recipes.getInstructions(id)
        .then(text => {
            res.status(200).json(text)
        })
        .catch(error => {
            res.status(500).json({ message: error.mesage })
        })
})

module.exports = router