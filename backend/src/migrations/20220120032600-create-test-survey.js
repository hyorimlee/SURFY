'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('test_surveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      host: {
        type: Sequelize.STRING
      },
      target: {
        type: Sequelize.STRING
      },
      is_VS: {
        type: Sequelize.INTEGER
      },
      deleteAt: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('test_surveys');
  }
};