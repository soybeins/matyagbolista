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
      password: {
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
