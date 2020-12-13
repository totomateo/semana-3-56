//Express
const router = require('express').Router();

// Creación de mi manejador de ruta
const apiRouterUser = require('./api/users.js');

// .com/api/auth/
router.use('/auth', apiRouterUser);

// Exportar el router
module.exports = router;