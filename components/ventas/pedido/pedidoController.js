const { models } = require('../../../libs/sequelize');
const boom = require('@hapi/boom');

class ProductoController {
  constructor() { }

  /*
    Estructura de data:
    {
      ...data,
      productos: [
        {
          productoId: 1,
          cantidad: 10,
          precio: 100
        }
      ]
  */
  async add(data) {
    console.log(data);
    const newPedido = await models.Pedido.create({
      ...data,
      createdAt: new Date().toLocaleString('es-ES', { timeZone: 'America/La_Paz' })
    });
    console.log(newPedido);
    for (let i = 0; i < data.productos.length; i++) {
      await models.Detalle_venta.create({
        producto_id: data.productos[i].productoId,
        empleadoId: data.empleadoId,
        cantidad: data.productos[i].cantidad,
        precio: data.productos[i].precio,
      });
    }
    return newPedido;
  }

  async edit(data, id) {
    const pedido = await models.Pedido.findByPk(id);
    if (!pedido) {
      throw boom.notFound('Pedido no encontrado');
    }
    const detalles = await models.Detalle_venta.findAll({ where: { pedidoId: id } });
    for (let i = 0; i < detalles.length; i++) {
      await detalles[i].destroy();
    }
    for (let i = 0; i < data.productos.length; i++) {
      await models.Detalle_venta.create({
        producto_id: data.productos[i].productoId,
        cantidad: data.productos[i].cantidad,
        precio: data.productos[i].precio,
      });
    }
    const pedidoUpdated = await pedido.update({
      ...data,
    });
    return pedidoUpdated;
  }

  async delete(id) {
    const Pedido = await models.Pedido.findByPk(id);
    if (!Pedido) {
      throw boom.notFound('Pedido no encontrado');
    }
    await Pedido.destroy();
    return id;
  }

  async find(id) {
    const Pedido = await models.Pedido.findByPk(id, {
      include: ['productos']
    });
    if (!Pedido) {
      throw boom.notFound('Pedido no encontrado');
    }

    return response;
  }

  async getAll() {
    const pedidos = await models.Pedido.findAll({
      attributes: ['id', 'fechaPedido', 'fechaEntrega', 'detalle', 'total', 'createdAt', 'empleadoId', 'clienteId', 'createdAt'],
      // include: ['empleado', 'cliente'],
    });
    return pedidos;
  }
}

module.exports = ProductoController;
