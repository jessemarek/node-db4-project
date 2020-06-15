const express = require('express')
const server = express()

//Middleware
server.use(express.json())

//Routers
const recipesRouter = require('../recipes/recipes-router')
const ingredientsRouter = require('../ingredients/ingredients-router')

//Endpoints
server.use('/api/recipes', recipesRouter)
server.use('/api/ingredients', ingredientsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: "up and running!" })
})

module.exports = server