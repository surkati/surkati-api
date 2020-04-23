'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_apis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        unique : true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      picture: {
        type: Sequelize.STRING(191),
        allowNull: false,
        defaultValue: 'default.png'
      },
      role: {
        type: Sequelize.ENUM('free', 'pro'),
        allowNull: true,
        defaultValue: 'free'
      },
      status: {
        type: Sequelize.ENUM('active', 'suspend'),
        allowNull: false,
        defaultValue: 'active'
      },
      token: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users_apis')
  }
}