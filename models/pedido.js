'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    static associate(models) {
      this.belongsTo(models.pelicula, {
        foreignKey: 'peliculaId'
      });
      this.belongsTo(models.usuario, {
        foreignKey: 'usuarioId'
      });
    }
  };
  //AQUI SE INDICARAN LAS DIFERENTES COLUMNAS DE LA TABLA PEDIDO
  pedido.init({
    peliculaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    fecha_alquiler: DataTypes.DATE,
    fecha_devolucion: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'pedido',
  });
  return pedido;
};