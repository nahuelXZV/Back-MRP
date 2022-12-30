const { Model, DataTypes, Sequelize } = require('sequelize');
const { CLIENTE_TABLE } = require('./clienteModel');
const { EMPLEADO_TABLE } = require('./empleadoModel');

const PEDIDO_TABLE = 'pedido';

const PedidoSchema = {
  id: {
    allowNull: false, // not null
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  detalle: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fechaEntrega: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fechaPedido: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  total: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2)
  },
  empleadoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'empleado_id',
    references: {
      model: EMPLEADO_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  clienteId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'cliente_id',
    references: {
      model: CLIENTE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'created_at',
  }
}

class Pedido extends Model {
  static associate(models) {
    this.belongsToMany(models.Producto, {
      as: 'productos',
      through: models.Detalle_venta,
      foreignKey: 'pedidoId',
      otherKey: 'productoId',
    });
    this.belongsTo(models.Empleado, {
      foreignKey: 'empleadoId',
      as: 'empleado',
    });
    this.belongsTo(models.Cliente, {
      foreignKey: 'clienteId',
      as: 'cliente',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PEDIDO_TABLE,
      modelName: 'Pedido',
      timestamps: false,
    }
  }
}


module.exports = { PEDIDO_TABLE, PedidoSchema, Pedido }
