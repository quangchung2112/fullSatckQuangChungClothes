"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("ProductVariants", "colorId", "color");

    await queryInterface.changeColumn("ProductVariants", "color", {
      type: DataTypes.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("ProductVariants", "color", {
      type: DataTypes.INTEGER,
      allowNull: false,
    });
    await queryInterface.renameColumn("ProductVariants", "color", "colorId");
  },
};
