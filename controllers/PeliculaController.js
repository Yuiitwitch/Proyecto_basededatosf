//Importo modelo de datos
const db = require("../models");
const peliculas = db.pelicula;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 
const PeliculaController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all Peliculas from database
PeliculaController.getAll = (req, res) => {
    
    peliculas.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Peliculas."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET Peliculas by Id from database
PeliculaController.getById = (req, res) => {
    const id = req.params.id;

    peliculas.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Peliculas with id=" + id
        });
      });
  };

  PeliculaController.getByTitulo = (req, res) => {

    let titulo = req.params.titulo;
    
    peliculas.findAll( {where: {titulo: titulo}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a las películas."
        });
      });
  };
  PeliculaController.getByCity = (req, res) => {

    let ciudad = req.params.ciudad;
    
    peliculas.findAll( {where: {ciudad: ciudad}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a las películas."
        });
      });
  };
  PeliculaController.getByGenre = (req, res) => {

    let generos = req.params.genero;
    
    peliculas.findAll( {where: {genero: generos}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a las películas."
        });
      });
  };
//CREATE a new Pelicula in database
PeliculaController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Creacion de Peliculas
    const newPelicula = {
      titulo: req.body.titulo,
      genero: req.body.genero,
      actor: req.body.actor
    };
  
    // Guarda Peliculas en la base de datos
    Peliculas.create(newPelicula)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Pelicula."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a Pelicula from database
PeliculaController.update = (req, res) => {
    const id = req.params.id;
  
    peliculas.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Pelicula was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Pelicula with id=${id}. Maybe Pelicula was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Pelicula with id=" + id
        });
      });
  };

//DELETE a Pelicula by Id from database
PeliculaController.delete = (req, res) => {
    const id = req.params.id;
  
    peliculas.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Pelicula was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Pelicula with id=${id}. Maybe Pelicula was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Pelicula with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE all Peliculas from database
//delete all Peliculas 
  PeliculaController.deleteAll = (req, res) => {
    peliculas.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Peliculas were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Peliculas."
        });
      });
  };

module.exports = PeliculaController;