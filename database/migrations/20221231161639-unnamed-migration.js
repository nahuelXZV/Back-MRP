'use strict';

const { DETALLE_COMPRA_TABLE, Detalle_compraSchema } = require('../models/detalle_compraModel');
const { COMPRA_TABLE, CompraSchema } = require('../models/compraModel');
const { PROVEEDOR_TABLE, ProveedorSchema } = require('../models/proveedorModel');
const { ALMACEN_TABLE, AlmacenSchema } = require('../models/almacenModel');
const { SECTOR_TABLE, SectorSchema } = require('../models/sectorModel');
const { UNIDAD_MEDIDA_TABLE, Unidad_medidaSchema } = require('../models/unidad_medidaModel');
const { MATERIA_PRIMA_TABLE, Materia_primaSchema } = require('../models/materia_primaModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ALMACEN_TABLE, AlmacenSchema);
    await queryInterface.createTable(SECTOR_TABLE, SectorSchema);
    await queryInterface.createTable(UNIDAD_MEDIDA_TABLE, Unidad_medidaSchema);
    await queryInterface.createTable(PROVEEDOR_TABLE, ProveedorSchema);
    await queryInterface.createTable(MATERIA_PRIMA_TABLE, Materia_primaSchema);
    await queryInterface.createTable(COMPRA_TABLE, CompraSchema);
    await queryInterface.createTable(DETALLE_COMPRA_TABLE, Detalle_compraSchema);

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(DETALLE_COMPRA_TABLE);
    await queryInterface.dropTable(MATERIA_PRIMA_TABLE);
    await queryInterface.dropTable(UNIDAD_MEDIDA_TABLE);
    await queryInterface.dropTable(SECTOR_TABLE);
    await queryInterface.dropTable(ALMACEN_TABLE);
    await queryInterface.dropTable(PROVEEDOR_TABLE);
    await queryInterface.dropTable(COMPRA_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
