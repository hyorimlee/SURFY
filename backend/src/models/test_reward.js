'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test_reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.test_reward.belongsTo(models['test_survey'],{foreignKey:"fk_surveys"});

    }
  }
  test_reward.init({
    probability: DataTypes.DOUBLE,
    reward: DataTypes.STRING,
    remain: DataTypes.INTEGER,
    cnt: DataTypes.INTEGER,
    fk_surveys: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'test_reward',
  });
  return test_reward;
};