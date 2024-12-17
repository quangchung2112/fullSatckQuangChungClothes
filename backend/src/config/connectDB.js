const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dataclothes", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
