const { usuario } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { red } = require('colors');

const UsuarioController = {};


//GESTIONAMOS LOGIN DE USUARIOS
UsuarioController.signIn = (req, res) => {
  let { correo, contraseña } = req.body;
  // Buscar usuario
  usuario.findOne({
    where: { correo: correo }
  }).then(user => {
    if (!user) {
      res.status(404).json({ msg: "Usuario con este correo no encontrado" });
    } else {
      console.log(correo);
      if (bcrypt.compareSync(contraseña, user.contraseña)) {
        // Creamos el token
        let token = jwt.sign({ usuario: user }, authConfig.secret, {
          expiresIn: authConfig.expires
        });

        res.json({
          usuario: user,
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
UsuarioController.signUp = (req, res) => {

  // // Encriptamos la contraseña
  let password = bcrypt.hashSync(req.body.contraseña, Number.parseInt(authConfig.rounds));

  // Crear un usuario
  usuario.create({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    correo: req.body.correo,
    direccion: req.body.direccion,
    poblacion:req.body.poblacion,
    contraseña: password,
    rol: "usuario"
  }).then(user => {

    // // Creamos el token
    // let token = jwt.sign({ usuario: user }, authConfig.secret, {
    //     expiresIn: authConfig.expires
    // });

    res.json({
      usuario: user,
      // token: token
    });

  }).catch(err => {
    res.status(500).json(err);
  });

};

//-------------------------------------------------------------------------------------

//OBTENEMOS LISTADO DE TODAS LOS USUARIOS



UsuarioController.getAll = (req, res) => {

  if (req.user.usuario.rol == "administrador") {

    usuario.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving categories."
        });
      });
  } else {
    res.send({
      message: `permisos insuficiente, contacto con un adminsitrador`
    });
  }
};


//buscamos usuario por id
UsuarioController.getById = (req, res) => {
  const id = req.params.id;

  if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {

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
  } else {
    res.send({
      message: `permisos insuficientes, contacte con un administrador`
    })
  }
};


//-------------------------------------------------------------------------------------

UsuarioController.update = (req, res) => {
  const id = req.params.id;

  if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {

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
  } else {
    res.send({
      message: `permisos infucientes, contacte con un administrador`
    });
  }
};


//borrar todos los usuarios por id
UsuarioController.delete = (req, res) => {
  const id = req.params.id;

  if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {
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
  } else {
    res.send({
      message: `permisos insuficientes, contacte con un administrador`
    });
  }
};
//borrar todos los usuarios
UsuarioController.deleteAll = (req, res) => {

  if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {
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
    }else{
      res.send({
        message: `permisos insuficientes, contacte con un administrador`
      })
    }
  };

  module.exports = UsuarioController;
