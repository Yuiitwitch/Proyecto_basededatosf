const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

//Importo modelo de datos
const UsuarioController = require('../controllers/UsuarioController');


// Dos rutas: login y registro
// /api/singin & /api/singup
router.post('/login',auth, UsuarioController.signIn);
router.post('/registro', UsuarioController.signUp);
router.get('/' ,auth, UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.put(':id',auth, UsuarioController.update);
router.delete('/', auth, UsuarioController.deleteAll);
router.delete('/:id', auth, UsuarioController.delete);

module.exports = router;