//Express
const router = require('express').Router();
//Llamado a los modelos
const models = require('../../models');
// Ruta del controlador
const userController = require('../../controllers/userController.js');

// listar .com/api/auth/
// router.get('/', userController.listar);
router.get('/', async(req, res)=>{
    const user = await models.user.findAll()
    res.status(200).json(user);
});

// Sign in .com/api/auth/signin
router.post('/signin', userController.signin);

// Exportar el router
module.exports = router;