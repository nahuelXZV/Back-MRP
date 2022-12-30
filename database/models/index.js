const { User, UserSchema } = require('./userModel');
const { Cargo, CargoSchema } = require('./cargoModel');
const { Empleado, EmpleadoSchema } = require('./empleadoModel');
const { Bitacora, BitacoraSchema } = require('./bitacoraModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Cargo.init(CargoSchema, Cargo.config(sequelize));
  Empleado.init(EmpleadoSchema, Empleado.config(sequelize));
  Bitacora.init(BitacoraSchema, Bitacora.config(sequelize));

  // Associations
  User.associate(sequelize.models);
  Cargo.associate(sequelize.models);
  Empleado.associate(sequelize.models);
  Bitacora.associate(sequelize.models);

}

module.exports = setupModels;
