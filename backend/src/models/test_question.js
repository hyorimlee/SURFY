'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test_question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.test_question.belongsTo(models['test_survey'],{foreignKey:"fk_surveys"});
      models.test_question.hasMany(models['test_option'],{foreignKey:"fk_question"});

    }
  }
  test_question.init({
    number: DataTypes.INTEGER,
    content: DataTypes.STRING,
    required: DataTypes.INTEGER,
    maxChoice: DataTypes.INTEGER,
    fk_surveys: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'test_question',
  });
  return test_question;
};