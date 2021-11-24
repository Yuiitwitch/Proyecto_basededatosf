//Importo modelo de datos
const db = require("../models");
const pedidos = db.pedido;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

const PedidoController = {}; //Create the object controller


//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all categories from database
PedidoController.getAll = (req, res) => {

  

  pedidos.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};


//-------------------------------------------------------------------------------------
//GET categories by Id from database
PedidoController.getById = (req, res) => {
  const id = req.params.id;

  pedidos.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Pedido with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving categories with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//CREATE a new Pedido in database
PedidoController.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Pedido
  const newPedido = {
    peliculaId: req.body.peliculaId,
    usuarioId: req.body.usuarioId,
    fecha_alquiler: req.body.fecha_alquiler,
    fecha_devolucion: req.body.fecha_devolucion
  };

  // Save Pedido in the database
  pedidos.create(newPedido)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ah ocurrido un error al crear el pedido."
      });
    });
};


//-------------------------------------------------------------------------------------
//UPDATE a Pedido from database
PedidoController.update = (req, res) => {
  const id = req.params.id;

  pedidos.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pedido was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pedido with id=${id}. Maybe Movie was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Pedido with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//GET orders by user id 
//FindByUserId
PedidoController.getByUserId = (req, res) => {
  pedidos.findAll({ where: { usuarioId : req.params.usuarioId } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE a Pedido by Id from database
PedidoController.delete = (req, res) => {
  const id = req.params.id;

  pedidos.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pedido was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Pedido with id=${id}. Maybe Movie was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Pedido with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE all categories from database
//delete all categories   
PedidoController.deleteAll = (req, res) => {
  pedidos.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} categories were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all categories."
      });
    });
};

module.exports = PedidoController;