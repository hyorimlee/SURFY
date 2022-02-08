'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   models.member.belongsTo(models['type'],{foreignKey:"fk_types"});
    //   models.member.belongsTo(models['interest'],{foreignKey:"fk_interest"});
        models.member.hasMany(models['mileage'],{foreignKey:"fk_members"})
        models.member.hasMany(models['answer'],{foreignKey:"fk_members"})
        models.member.hasMany(models['roulette_result'],{foreignKey:"fk_members"})
    }
  }
  member.init({
    member_code: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    sex: DataTypes.STRING,
    sns: DataTypes.STRING,
    survey_count: DataTypes.INTEGER,
    fk_types: DataTypes.INTEGER,
    fk_interests: DataTypes.INTEGER,
    survey_count: DataTypes.INTEGER,
    is_withdraw: DataTypes.BOOLEAN,
    is_operator: DataTypes.BOOLEAN,
    birth: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'member',
    timestamps: false,
  });
  return member;
};