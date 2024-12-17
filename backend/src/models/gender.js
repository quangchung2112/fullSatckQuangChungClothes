"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class gender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      gender.hasMany(models.ProductVariant, {
        foreignKey: "genderId",
        as: "infogender",
      });
    }
  }
  gender.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "gender",
    }
  );
  return gender;
};
