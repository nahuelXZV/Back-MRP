const { models } = require('../../../libs/sequelize');
const boom = require('@hapi/boom');

class CargoController {
  constructor() { }

  async getAll() {
    const bitacoras = await models.Bitacora.findAll();
    return bitacoras;
  }
}

module.exports = CargoController;
