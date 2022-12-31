const cargoRouter = require('../components/usuario/cargo/cargoRoute');
const usersRouter = require('../components/usuario/users/userRoute');
const authRouter = require('../components/usuario/auth/authRoute');
const bitacoraRouter = require('../components/usuario/bitacora/bitacoraRoute');
const empleadoRouter = require('../components/usuario/empleado/empleadoRoute');

const clienteRouter = require('../components/ventas/cliente/clienteRoute');
const productoRouter = require('../components/ventas/producto/productoRoute');
const stockRouter = require('../components/ventas/stock_diario/stockRoute');
const pedidoRouter = require('../components/ventas/pedido/pedidoRoute');

const almacenRouter = require('../components/inventario/almacen/almacenRoute');
const sectorRouter = require('../components/inventario/sector/sectorRoute');
const unidadRouter = require('../components/inventario/unidad/unidadRoute');
const proveedorRouter = require('../components/inventario/proveedor/proveedorRoute');
const materia_primaRouter = require('../components/inventario/materia_prima/materia_primaRoute');
const compraRoter = require('../components/inventario/compra/compraRoute');

const express = require('express');

function mainRouter(app) {
  // Lista de rutas
  const router = express.Router();  //create a router
  app.use('/api', router);        //use the router
  router.use('/users', usersRouter);  //use the usersRouter
  router.use('/auth', authRouter);  //use the authRouter
  router.use('/cargo', cargoRouter);  //use the cargoRouter
  router.use('/bitacora', bitacoraRouter);  //use the bitacoraRouter
  router.use('/empleado', empleadoRouter);  //use the empleadoRouter

  router.use('/cliente', clienteRouter);  //use the clienteRouter
  router.use('/producto', productoRouter);  //use the productoRouter
  router.use('/stock', stockRouter);  //use the stockRouter
  router.use('/pedido', pedidoRouter);  //use the pedidoRouter

  router.use('/almacen', almacenRouter);  //use the almacenRouter
  router.use('/sector', sectorRouter);  //use the sectorRouter
  router.use('/unidad', unidadRouter);  //use the unidadRouter
  router.use('/proveedor', proveedorRouter);  //use the proveedorRouter
  router.use('/materia_prima', materia_primaRouter);  //use the materia_primaRouter
  router.use('/compra', compraRoter);  //use the compraRoter
}

module.exports = mainRouter;
