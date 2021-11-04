const { usuario } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const UsuarioController = {};


//GESTIONAMOS LOGIN DE USUARIOS
UsuarioController.signIn = (req, res) =>{
  // let { correo, clave } = req.body;
  // Buscar usuario
  user.findOne({ where: { correo: correo }
  }).then(user => {
      if (!user) {
          res.status(404).json({ msg: "Usuario con este correo no encontrado" });
      } else {
          if (bcrypt.compareSync(clave, user.clave)) {
              // Creamos el token
              let token = jwt.sign({ user: user }, authConfig.secret, {
                  expiresIn: authConfig.expires
              });

              res.json({
                  user: user,
                  token: token
              })
          } else {
              // Unauthorized Access
              res.status(401).json({ msg: "Contraseña incorrecta" })
          }
      }
  }).catch(err => {
      res.status(500).json(err);
  })
};

//-------------------------------------------------------------------------------------

//GESTIONAMOS REGISTRO DE USUARIOS
UsuarioController.signUp = (req, res)=> {

        // Encriptamos la contraseña
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        // Crear un usuario
        user.create({
            nombre: req.body.nombre,
            correo: req.body.correo
        }).then(user => {

            // Creamos el token
            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                user: user,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });

    };

//-------------------------------------------------------------------------------------

//OBTENEMOS LISTADO DE TODAS LOS USUARIOS



UsuarioController.getAll = (req, res) => {

  usuarios.findAll()
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


//buscamos usuario por id
UsuarioController.getById = (req, res) => {
    const id = req.params.id;
  
    usuario.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find usuario with id=${id}.`
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

UsuarioController.update = (req, res) => {
  const id = req.params.id;

  usuarios.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuario was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Usuario with id=${id}. Maybe Usuario was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Usuario with id=" + id
      });
    });
};


//borrar todos los usuarios por id
UsuarioController.delete = (req, res) => {
    const id = req.params.id;
  
    usuario.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "usuario was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete usuario with id=${id}. Maybe Usuario was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete usuario with id=" + id
        });
      });
  };
//borrar todos los usuarios
UsuarioController.deleteAll = (req, res) => {
    usuarios.destroy({
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

module.exports = UsuarioController;
