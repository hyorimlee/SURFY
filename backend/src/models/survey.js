'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  survey.init({
    title: DataTypes.STRING,
    host: DataTypes.STRING,
    target: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    reg_date: DataTypes.DATE,
    is_VS: DataTypes.INTEGER,
    fk_reward: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'survey',
  });
  return survey;
};