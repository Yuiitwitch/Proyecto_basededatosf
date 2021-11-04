'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('pedidos', [{"peliculaId":5,"usuarioId":5,"fecha_alquiler":"04.05.2020","fecha_devolucion":"23.07.2021","createdAt":"27.02.2021","updatedAt":"24.03.2023"},
      {"peliculaId":15,"usuarioId":15,"fecha_alquiler":"29.06.2020","fecha_devolucion":"21.02.2022","createdAt":"06.03.2022","updatedAt":"16.12.2023"},
      {"peliculaId":25,"usuarioId":25,"fecha_alquiler":"01.02.2020","fecha_devolucion":"08.10.2022","createdAt":"27.07.2022","updatedAt":"14.12.2023"},
      {"peliculaId":35,"usuarioId":35,"fecha_alquiler":"02.02.2020","fecha_devolucion":"13.08.2021","createdAt":"08.09.2022","updatedAt":"02.11.2023"},
   
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('pedidos', null, {});
     
  }
};
