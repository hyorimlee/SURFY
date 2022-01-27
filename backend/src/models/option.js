'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.option.belongsTo(models['question'],{foreignKey:"fk_questions"});
      models.option.belongsTo(models['survey'],{foreignKey:"fk_surveys"});
      models.option.hasMany(models['answer'],{foreignKey:"fk_options"});
    }
  }
  option.init({
    value: DataTypes.STRING,
    type: DataTypes.STRING,
    img_path: DataTypes.STRING,
    fk_surveys: DataTypes.INTEGER,
    fk_questions: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'option',
  });
  return option;
};