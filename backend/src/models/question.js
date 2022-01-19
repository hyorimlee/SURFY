'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  question.init({
    fk_survey: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    required: DataTypes.INTEGER,
    maxChoice: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'question',
  });
  return question;
};