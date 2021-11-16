'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [{"nombre":"Neall","apellidos":"O' Borne","correo":"noborne0@ask.com","direccion":"132 Mendota Trail","poblacion":"Palmar de Varela","contraseña":bcrypt.hashSync("lfkzdjsj", Number.parseInt(authConfig.rounds)),"rol":"administrador","createdAt":"8.7.2021","updatedAt":"31.12.2022"},
    {"nombre":"Woodie","apellidos":"De Simone","correo":"wdesimone1@ameblo.jp","direccion":"96781 Portage Court","poblacion":"Burla","contraseña":bcrypt.hashSync("iiknqrko", Number.parseInt(authConfig.rounds)),"rol":"usuario","createdAt":"27.1.2022","updatedAt":"31.12.2022"},
    {"nombre":"Nari","apellidos":"Brehaut","correo":"nbrehaut2@histats.com","direccion":"4331 Granby Trail","poblacion":"Fengpo","contraseña":bcrypt.hashSync("pndebavr", Number.parseInt(authConfig.rounds)),"rol":"usuario","createdAt":"27.6.2021","updatedAt":"31.12.2022"},
    {"nombre":"Nicko","apellidos":"Blaxlande","correo":"nblaxlande3@live.com","direccion":"1208 Prairieview Hill","poblacion":"Jacaraú","contraseña":bcrypt.hashSync("nbksbdiy", Number.parseInt(authConfig.rounds)),"rol":"usuario","createdAt":"23.11.2021","updatedAt":"31.12.2022"},
    {"nombre":"Danice","apellidos":"Teacy","correo":"dteacy4@epa.gov","direccion":"4981 Parkside Drive","poblacion":"Vetlanda","contraseña":bcrypt.hashSync("lgykjtbv", Number.parseInt(authConfig.rounds)),"rol":"usuario","createdAt":"1.8.2021","updatedAt":"31.12.2022"},
    {"nombre":"Erl","apellidos":"Shaul","correo":"eshaul5@geocities.jp","direccion":"3391 Heffernan Park","poblacion":"Asempapan","contraseña":bcrypt.hashSync("qzwqcost", Number.parseInt(authConfig.rounds)),"rol":"usuario","createdAt":"3.9.2022","updatedAt":"31.12.2022"},
    {"nombre":"Norean","apellidos":"Pass","correo":"npass6@spotify.com","direccion":"1430 Kinsman Crossing","poblacion":"Beauharnois","contraseña":bcrypt.hashSync("iztkxkcy", Number.parseInt(authConfig.rounds)),"rol":"usuario","createdAt":"18.4.2022","updatedAt":"31.12.2022"},
    {"nombre":"Andrey","apellidos":"Demchen","correo":"ademchen7@sogou.com","direccion":"3 Dawn Center","poblacion":"Irvine","contraseña":bcrypt.hashSync("kobrvxcr", Number.parseInt(authConfig.rounds)),"rol":"usuario","createdAt":"31.5.2021","updatedAt":"31.12.2022"},
    {"nombre":"Amelita","apellidos":"Mannion","correo":"amannion8@123-reg.co.uk","direccion":"0 4th Place","poblacion":"Bells Corners","contraseña":bcrypt.hashSync("hroiqfmb", Number.parseInt(authConfig.rounds)),"rol":"usuario","createdAt":"13.6.2021","updatedAt":"31.12.2022"},
    {"nombre":"Redford","apellidos":"Ciccotto","correo":"rciccotto9@yahoo.co.jp","direccion":"5411 Morning Circle","poblacion":"Qiaotou","contraseña":bcrypt.hashSync("leuneuxp", Number.parseInt(authConfig.rounds)),"rol":"usuario","createdAt":"22.11.2022","updatedAt":"31.12.2022"}] 
    , {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};