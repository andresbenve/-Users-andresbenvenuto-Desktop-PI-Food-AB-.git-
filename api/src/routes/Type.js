const { Router } = require('express');
const {Type, Recipe, recipe_type} = require('../db')
const axios = require('axios')
const {getTypes} = require('../controllers/typeController')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get('/', getTypes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




module.exports = router;
