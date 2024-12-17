"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductVariant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      ProductVariant.belongsTo(models.product, {
        foreignKey: "productId",
        as: "infoProduct",
      });

      // ProductVariant.belongsTo(models.Color, {
      //   foreignKey: "colorID",
      //   as: "infoColor",
      // });

      ProductVariant.belongsTo(models.Size, {
        foreignKey: "sizeId",
        as: "infoSize",
      });

      ProductVariant.belongsTo(models.gender, {
        foreignKey: "genderId",
        as: "infogender",
      });

      ProductVariant.hasOne(models.shoppingcart, {
        foreignKey: "productvariantsId",
        as: "infoInShoppingCart",
      });
    }
  }
  ProductVariant.init(
    {
      productId: DataTypes.INTEGER,
      sizeId: DataTypes.INTEGER,
      color: DataTypes.STRING,
      genderId: DataTypes.INTEGER,
      images: DataTypes.TEXT,
      mainImage: DataTypes.TEXT,
      stock_quantity: DataTypes.INTEGER,
      sold_quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductVariant",
    }
  );
  return ProductVariant;
};
