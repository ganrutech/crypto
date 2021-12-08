const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("wazirx", "root", "Ganru@123", {
  dialect: "sqlite",
  storage: "./database/db.sqlite",
});

module.exports = sequelize;
