'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class example extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  example.init({
    type: DataTypes.STRING,
    label: DataTypes.STRING,
    value: DataTypes.INTEGER,
    img_path: DataTypes.STRING,
    question_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'example',
  });
  return example;
};