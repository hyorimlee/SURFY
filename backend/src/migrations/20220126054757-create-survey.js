'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('surveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      host: {
        allowNull: false,
        type: Sequelize.STRING
      },
      target: {
        type: Sequelize.STRING
      },
      is_VS: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      img_path: {
        type: Sequelize.STRING
      },
      deletedAt: {
        allowNull: false,
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
    await queryInterface.dropTable('surveys');
  }
};