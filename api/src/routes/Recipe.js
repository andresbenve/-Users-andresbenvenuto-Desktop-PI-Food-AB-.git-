const { Router } = require('express');
const {Type, Recipe, recipe_type} = require('../db')
const axios = require('axios')
const {getRecipes, postRecipes} = require('../controllers/recipeController')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', getRecipes)
router.get('/{idReceta}', ) //fix
router.post('/', postRecipes) //fix



module.exports = router;
