'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CollectionsOnProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CollectionsOnProducts.init({
    productId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CollectionsOnProducts',
  });
  return CollectionsOnProducts;
};