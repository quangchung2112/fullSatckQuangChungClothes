"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      product.hasMany(models.ProductVariant, {
        foreignKey: "productId",
        as: "infoProduct",
      });

      product.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "infoCategory",
      });
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      des: DataTypes.TEXT,
      categoryId: DataTypes.INTEGER,
      isbestselling: DataTypes.BOOLEAN,
      isFeatured: DataTypes.BOOLEAN,
      isNew: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
