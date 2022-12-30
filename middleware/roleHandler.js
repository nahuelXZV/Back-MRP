const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

function checkRoles(...roles) {
  return (req, res, next) => {
    const { id } = req.params;
    models.User.findByPk(id).then((user) => {
      if (roles.includes(user.role)) {
        next();
      } else {
        next(boom.unauthorized());
      }
    });
  }
}

module.exports = { checkRoles };
