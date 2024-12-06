"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Order.init(
		{
			customerId: DataTypes.INTEGER,
			totalAmount: DataTypes.INTEGER,
			status: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Order",
		}
	);
	return Order;
};
Order.associate = function (models) {
	Order.belongsTo(models.Customer, { foreignKey: "customerId" });
	Order.hasMany(models.OrderItem, { foreignKey: "orderId" });
};
