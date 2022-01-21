'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('test_rewards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      probability: {
        type: Sequelize.DOUBLE
      },
      reward: {
        type: Sequelize.STRING
      },
      remain: {
        type: Sequelize.INTEGER
      },
      cnt: {
        type: Sequelize.INTEGER
      },
      fk_surveys: {
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
    await queryInterface.dropTable('test_rewards');
  }
};