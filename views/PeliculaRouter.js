const express = require('express');
const router = express.Router();

//Importo modelo de datos
const MovieController = require('../controllers/PeliculaController');

// End-points CRUD movies
router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.get('/titulo/:titulo', PeliculaController.getByTitulo);
router.get('/ciudad/:ciudad', PeliculaController.getByCity);
router.get('/genero/:genero', PeliculaController.getByGenre);
router.post('/', MovieController.create);
router.put('/:id',auth, MovieController.update);
router.delete('/',auth, MovieController.deleteAll);
router.delete('/:id',auth, MovieController.delete);

module.exports = router;