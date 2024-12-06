"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			merchantId: {
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			price: {
				type: Sequelize.INTEGER,
			},
			images: {
				type: Sequelize.ARRAY(Sequelize.STRING),
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Products");
	},
};
