const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const recipe = require('./Recipe')// Configurar los routers
const type = require('./Type')// Configurar los routers

router.use('/recipe', recipe)
router.use('/type', type)


module.exports = router;
