const { Router } = require('express');
const {Diet, Recipe, recipe_diet} = require('../db')
const axios = require('axios')
const {getCharacters} = require('../controllers/recipeController')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', getCharacters)
router.get('/{idReceta}', ) //fix
router.post('/', ) //fix



module.exports = router;
