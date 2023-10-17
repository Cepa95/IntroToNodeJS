const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const { DataTypes } = Sequelize; 

const CartItem = sequelize.define("cartItem", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: DataTypes.INTEGER, 
});

module.exports = CartItem;