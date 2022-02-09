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
      models.question.belongsTo(models['survey'],{foreignKey:"fk_surveys"});
      models.question.hasMany(models['option'],{foreignKey:"fk_questions"});
      models.question.hasMany(models['answer'],{foreignKey:"fk_questions"});

    }
  }
  question.init({
    number: DataTypes.INTEGER,
    content: DataTypes.STRING,
    required: DataTypes.INTEGER,
    maxChoice: DataTypes.INTEGER,
    fk_surveys: DataTypes.INTEGER,
    img_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'question',
  });
  return question;
};