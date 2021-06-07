'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('scouts', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
      },
      uuid:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      background: {
        type: Sequelize.STRING,
        allowNull: true
      },
      school: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      }
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('scouts');
  }
};
