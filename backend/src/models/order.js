"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init(
    {
      customerName: DataTypes.STRING,
      customerPhone: DataTypes.STRING,
      customerEmail: DataTypes.STRING,
      customerAddress: DataTypes.STRING,
      orderId: DataTypes.STRING,
      paymentStatus: DataTypes.ENUM("pending", "completed", "failed"),
      totalAmount: DataTypes.DECIMAL,
      paymentMethod: DataTypes.ENUM("Chuyển khoản", "Thanh toán khi nhận hàng"),
      orderStatus: DataTypes.ENUM("pending", "completed", "failed"),
      note: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
