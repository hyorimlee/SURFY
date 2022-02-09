'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.answer.belongsTo(models['option'],{foreignKey:"fk_options"});
<<<<<<< HEAD
=======
      models.answer.belongsTo(models['member'],{foreignKey:"fk_members"});
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
    }
  }
  answer.init({
    value: DataTypes.STRING,
    fk_members: DataTypes.INTEGER,
    fk_surveys: DataTypes.INTEGER,
    fk_questions: DataTypes.INTEGER,
    fk_options: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'answer',
  });
  return answer;
};