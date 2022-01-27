'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING
      },
      fk_members: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fk_surveys: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fk_questions: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fk_options: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('answers');
  }
};