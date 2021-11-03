const express = require('express');
const router = express.Router();

//Importo modelo de datos
const AuthController = require('../controllers/AuthController');


// Dos rutas: login y registro
// /api/singin & /api/singup
router.post('/login', UsuarioController.signIn);
router.post('/registro', UsuarioController.signUp);
outer.get('/', auth, UsuarioController.getAll);
router.get('/:id', auth, UsuarioController.getById);
router.put('/:id', auth, UsuarioController.update);
router.delete('/', auth, UsuarioController.deleteAll);
router.delete('/:id', auth, UsuarioController.delete);

module.exports = router;