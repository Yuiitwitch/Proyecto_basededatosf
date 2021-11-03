const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const PeliculaRouter = require('./views/PeliculaRouter');
const PedidoRouter = require('./views/PedidoRouter');
const UsuarioRouter = require('./views/UsuarioRouter');

//Rutas
router.use('/usuarios', UsuarioRouter); //Login and register routes
router.use('/peliculas', PeliculaRouter); //add auth
router.use('/pedidos', PedidoRouter);

module.exports = router;