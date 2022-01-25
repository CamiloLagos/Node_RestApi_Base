const { Router } = require ('express');
const { usuariosGET, usuarioPOST, usuariosDELETE } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGET)

router.post('/', usuarioPOST)

router.delete('/', usuariosDELETE)









module.exports = router;