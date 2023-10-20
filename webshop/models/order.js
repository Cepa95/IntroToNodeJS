const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const { DataTypes } = Sequelize;

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Order;
