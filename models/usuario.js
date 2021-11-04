'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      this.hasMany(models.pedido, {
        foreignKey: 'usuarioId'
      });
    }
  };
  //AQUI SE INDICARAN LAS DIFERENTES COLUMNAS DE LA TABLA USUARIO
  usuario.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};