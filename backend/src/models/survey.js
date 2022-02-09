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
      models.survey.hasMany(models['question'],{foreignKey:"fk_surveys"});
      models.survey.hasMany(models['reward'],{foreignKey:"fk_surveys"});
      models.survey.hasMany(models['option'],{foreignKey:'fk_surveys'});
<<<<<<< HEAD

=======
      models.survey.hasMany(models['roulette_result'],{foreignKey:'fk_surveys'});
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
    }
  }
  survey.init({
    title: DataTypes.STRING,
    host: DataTypes.STRING,
    target: DataTypes.STRING,
    is_VS: DataTypes.INTEGER,
    img_path: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'survey',
  });
  return survey;
};