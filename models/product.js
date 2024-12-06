"use strict";
const { Sequelize } = require("models");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Product.init(
		{
			merchantId: DataTypes.INTEGER,
			title: DataTypes.STRING,
			description: DataTypes.TEXT,
			price: DataTypes.INTEGER,
			images: DataTypes.ARRAY(Sequelize.STRING),
		},
		{
			sequelize,
			modelName: "Product",
		}
	);
	return Product;
};
Product.associate = function (models) {
	Product.belongsTo(models.Merchant, { foreignKey: "merchantId" });
	Product.hasMany(models.Variant, { foreignKey: "productId" });
	Product.belongsToMany(models.Collection, {
		through: models.CollectionsOnProducts,
		foreignKey: "productId",
	});
};
