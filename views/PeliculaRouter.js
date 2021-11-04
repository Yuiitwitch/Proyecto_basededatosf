const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

//Importo modelo de datos
const PeliculaController = require('../controllers/PeliculaController');

// End-points CRUD movies
router.get('/', PeliculaController.getAll);
router.get('/:id', PeliculaController.getById);
router.get('/titulo/:titulo', PeliculaController.getByTitulo);
router.get('/ciudad/:ciudad', PeliculaController.getByCity);
router.get('/genero/:genero', PeliculaController.getByGenre);
router.post('/',auth, PeliculaController.create);
router.put('/:id',auth, PeliculaController.update);
router.delete('/',auth, PeliculaController.deleteAll);
router.delete('/:id',auth, PeliculaController.delete);

module.exports = router;