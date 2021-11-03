'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    static associate(models) {
      this.hasMany(models.pedido, {
        foreignKey: 'peliculaId'
      });
    }
  };
  ////AQUI SE INDICARAN LAS DIFERENTES COLUMNAS DE LA TABLA PELICULA
  pelicula.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    actor: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'pelicula',
  });
  return pelicula;
};