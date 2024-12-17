"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      role.hasMany(models.accountManagement, {
        foreignKey: "roleId",
        as: "role",
      });
      role.hasMany(models.role_permissions, {
        foreignKey: "roleId",
        as: "permissions",
      });
    }
  }
  role.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "role",
    }
  );
  return role;
};
