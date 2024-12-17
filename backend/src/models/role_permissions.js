"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role_permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      role_permissions.belongsTo(models.role, {
        foreignKey: "roleId",
        as: "permissions",
      });
    }
  }
  role_permissions.init(
    {
      roleId: DataTypes.INTEGER,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "role_permissions",
    }
  );
  return role_permissions;
};
