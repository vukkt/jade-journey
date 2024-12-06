"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Merchant extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Merchant.init(
		{
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			storeName: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Merchant",
		}
	);
	return Merchant;
};
Merchant.associate = function (models) {
	Merchant.hasMany(models.Product, { foreignKey: "merchantId" });
};
