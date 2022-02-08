'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test_survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.test_survey.hasMany(models['test_question'],{foreignKey:"fk_surveys"});
      models.test_survey.hasMany(models['test_reward'],{foreignKey:"fk_surveys"});
    }
  }
  test_survey.init({
    title: DataTypes.STRING,
    host: DataTypes.STRING,
    target: DataTypes.STRING,
    is_VS: DataTypes.INTEGER,
    deleteAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'test_survey',
  });
  return test_survey;
};