"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Variant extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Variant.init(
		{
			productId: DataTypes.INTEGER,
			sku: DataTypes.STRING,
			price: DataTypes.INTEGER,
			inventoryQuantity: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Variant",
		}
	);
	return Variant;
};
Variant.associate = function (models) {
	Variant.belongsTo(models.Product, { foreignKey: "productId" });
};
