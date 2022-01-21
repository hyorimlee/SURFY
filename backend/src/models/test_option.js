'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test_option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.test_option.belongsTo(models['test_question'],{foreignKey:"fk_question"});
    }
  }
  test_option.init({
    value: DataTypes.STRING,
    type: DataTypes.STRING,
    img_path: DataTypes.STRING,
    fk_question: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'test_option',
  });
  return test_option;
};