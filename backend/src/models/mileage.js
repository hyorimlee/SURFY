'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mileage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.mileage.belongsTo(models['member'],{foreignKey:"fk_members"});
      // models.mileage.belongsTo(models['mileage_state'],{foreignKey:"fk_states"});
      models.mileage.hasMany(models['roulette_result'],{foreignKey:"fk_mileages"})
    }
  }
  mileage.init({
    fk_members: DataTypes.INTEGER,
    fk_states: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    timestamp: DataTypes.DATE,
    mileage: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'mileage',
    timestamps: false,
  });
  return mileage;
};