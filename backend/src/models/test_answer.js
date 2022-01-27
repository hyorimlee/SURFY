'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test_answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.test_option.belongsTo(models['test_option'],{foreignKey:"fk_options"});

    }
  }
  test_answer.init({
    value: DataTypes.STRING,
    finished: DataTypes.INTEGER,
    fk_members: DataTypes.INTEGER,
    fk_questions: DataTypes.INTEGER,
    fk_options: DataTypes.INTEGER,
    fk_surveys: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'test_answer',
  });
  return test_answer;
};