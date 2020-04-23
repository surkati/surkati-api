'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reciters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      server: {
        type: Sequelize.STRING(191),
        allowNull: false
      },
      riwayat: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      count: {
        type: Sequelize.TINYINT,
        allowNull: false
      },
      suras: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('reciters')
  }
}