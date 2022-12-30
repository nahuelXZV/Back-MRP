const { models } = require('../../../libs/sequelize');
const boom = require('@hapi/boom');

class ClienteController {
  constructor() { }

  async add(data) {
    const newCliente = await models.Cliente.create({
      ...data,
      createdAt: new Date().toLocaleString('es-ES', { timeZone: 'America/La_Paz' })
    });
    return newCliente;
  }

  async edit(data, id) {
    const cliente = await models.Cliente.findByPk(id);
    if (!cliente) {
      throw boom.notFound('Cliente no encontrado');
    }
    const ClienteUpdated = await cliente.update({
      ...data,
    });
    return ClienteUpdated;
  }

  async delete(id) {
    const cliente = await models.Cliente.findByPk(id);
    if (!cliente) {
      throw boom.notFound('Cliente no encontrado');
    }
    await cliente.destroy();
    return id;
  }

  async find(id) {
    const cliente = await models.Cliente.findByPk(id);
    if (!cliente) {
      throw boom.notFound('Cliente no encontrado');
    }
    return cliente;
  }

  async getAll() {
    const clientes = await models.Cliente.findAll();
    return clientes;
  }
}

module.exports = ClienteController;
