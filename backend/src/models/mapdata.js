'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mapdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mapdata.init({
    name : DataTypes.STRING,
    x : DataTypes.STRING,
    y : DataTypes.STRING,
    operating_time : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'mapdata',
    timestamps: false,
  });
  return mapdata;
};