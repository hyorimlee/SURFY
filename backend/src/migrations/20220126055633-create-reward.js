'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rewards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      probability: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      reward: {
        allowNull: false,
        type: Sequelize.STRING
      },
      remain: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cnt: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fk_surveys: {
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
    await queryInterface.dropTable('rewards');
  }
};