//Llamado a los modelos
const models = require('../models');
//Manejo de contraseñas encriptadas
const bcrypt = require('bcryptjs');
//JSON
const jwt = require('jsonwebtoken');

//Métodos
// exports.listar = async (req, res, next) => {
//     try {

//     } catch (error) {

//     }
// };
exports.signin = async (req, res, next) => {
    try {
        // Verificar que el usuario exista
        const user = await models.user.findOne({ where: { email: req.body.email } });
        if (user) {
            // Verificar que la contraseña sea correcta
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                const token = jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }, 'config.secret', { expiresIn: 86400 });
                res.status(200).send({
                    auth: true,
                    accessToken: token,
                });
            } else {
                res.status(401).json({
                    error: "Error en el usuario o contraseña"
                })
            }
        } else {
            res.status(404).json({
                error: "Error en el usuario o contraseña"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        }),
            next(error);
    }
}