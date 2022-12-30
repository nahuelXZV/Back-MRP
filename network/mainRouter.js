const cargoRouter = require('../components/usuario/cargo/cargoRoute');
const usersRouter = require('../components/usuario/users/userRoute');
const authRouter = require('../components/usuario/auth/authRoute');
const bitacoraRouter = require('../components/usuario/bitacora/bitacoraRoute');
const empleadoRouter = require('../components/usuario/empleado/empleadoRoute');
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
}

module.exports = mainRouter;
