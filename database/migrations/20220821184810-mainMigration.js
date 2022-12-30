'use strict';

const { USER_TABLE, UserSchema } = require('../models/userModel');
const { EMPLEADO_TABLE, EmpleadoSchema } = require('../models/empleadoModel');
const { CARGO_TABLE, CargoSchema } = require('../models/cargoModel');
const { BITACORA_TABLE, BitacoraSchema } = require('../models/bitacoraModel');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CARGO_TABLE, CargoSchema);
    await queryInterface.createTable(EMPLEADO_TABLE, EmpleadoSchema);
    await queryInterface.createTable(BITACORA_TABLE, BitacoraSchema);
    // Add others migrations here

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(BITACORA_TABLE);
    await queryInterface.dropTable(EMPLEADO_TABLE);
    await queryInterface.dropTable(CARGO_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    // Add others migrations here
  }
};
