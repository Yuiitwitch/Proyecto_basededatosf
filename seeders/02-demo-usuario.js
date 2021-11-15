'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [{"nombre":"Theodora","apellidos":"Matessian","correo":"tmatessian0@moonfruit.com","direccion":"663 Bowman Trail","poblacion":"San Vicente","contraseña":bcrypt.hashSync("umzdrhfb", Number.parseInt(authConfig.rounds)),"createdAt":"3.2.2021","updatedAt":"31.12.2022"},
    {"nombre":"Reuven","apellidos":"Reimer","correo":"rreimer1@usgs.gov","direccion":"3513 Drewry Crossing","poblacion":"Yumbe","contraseña":bcrypt.hashSync("osctpgty", Number.parseInt(authConfig.rounds)),"createdAt":"16.5.2021","updatedAt":"31.12.2022"},
    {"nombre":"Annmarie","apellidos":"Pluck","correo":"apluck2@sitemeter.com","direccion":"45570 La Follette Court","poblacion":"Xiachengzi","contraseña":bcrypt.hashSync("tkbvnjge", Number.parseInt(authConfig.rounds)),"createdAt":"18.6.2021","updatedAt":"31.12.2022"},
    {"nombre":"Mersey","apellidos":"Elsegood","correo":"melsegood3@chron.com","direccion":"68 Carberry Point","poblacion":"Italó","contraseña":bcrypt.hashSync("snhbwdsu", Number.parseInt(authConfig.rounds)),"createdAt":"19.6.2021","updatedAt":"31.12.2022"},
    {"nombre":"Aurthur","apellidos":"Walesa","correo":"awalesa4@odnoklassniki.ru","direccion":"19630 Fairview Court","poblacion":"Sumberan","contraseña":bcrypt.hashSync("ounplpmw", Number.parseInt(authConfig.rounds)),"createdAt":"24.9.2022","updatedAt":"31.12.2022"},
    {"nombre":"Mina","apellidos":"Worgan","correo":"mworgan5@businessinsider.com","direccion":"52960 Thackeray Drive","poblacion":"Serra da Silveira","contraseña":bcrypt.hashSync("pfizeyoq", Number.parseInt(authConfig.rounds)),"createdAt":"28.1.2021","updatedAt":"31.12.2022"},
    {"nombre":"Neils","apellidos":"Mc Caghan","correo":"nmccaghan6@shinystat.com","direccion":"0708 Lawn Circle","poblacion":"Feilaixia","contraseña":bcrypt.hashSync("axvxzndo", Number.parseInt(authConfig.rounds)),"createdAt":"14.5.2022","updatedAt":"31.12.2022"},
    {"nombre":"Sayers","apellidos":"Totaro","correo":"stotaro7@vimeo.com","direccion":"3567 Nelson Lane","poblacion":"Talagasari","contraseña":bcrypt.hashSync("gnlowidz", Number.parseInt(authConfig.rounds)),"createdAt":"15.12.2022","updatedAt":"31.12.2022"},
    {"nombre":"Elene","apellidos":"Stanbrooke","correo":"estanbrooke8@addtoany.com","direccion":"06 Fuller Parkway","poblacion":"Chardonnière","contraseña":bcrypt.hashSync("fjdoescc", Number.parseInt(authConfig.rounds)),"createdAt":"14.10.2022","updatedAt":"31.12.2022"},
    {"nombre":"Pablo","apellidos":"Knewstub","correo":"pknewstub9@craigslist.org","direccion":"1037 Jenna Way","poblacion":"Graneros","contraseña":bcrypt.hashSync("abdbnxik", Number.parseInt(authConfig.rounds)),"createdAt":"19.1.2021","updatedAt":"31.12.2022"}] 
    , {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};