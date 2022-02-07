'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roulette_result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.roulette_result.belongsTo(models['member'],{foreignKey:"fk_members"});
      models.roulette_result.belongsTo(models['survey'],{foreignKey:"fk_surveys"});
      // models.roulette_result.belongsTo(models['reward'],{foreignKey:"fk_rewards"});
    //   models.roulette_result.belongsTo(models['mileage'],{foreignKey:"fk_mileages"});
    }
  }
  roulette_result.init({
    fk_members: DataTypes.INTEGER,
    fk_surveys: DataTypes.INTEGER,
    fk_rewards: DataTypes.INTEGER,
    fk_mileages: DataTypes.INTEGER,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'roulette_result',
    timestamps:false,
  });
  return roulette_result;
};