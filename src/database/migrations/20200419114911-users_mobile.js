'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_mobiles', {
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
        type: Sequelize.ENUM('ustadz', 'member'),
        allowNull: true,
        defaultValue: 'member'
      },
      status: {
        type: Sequelize.ENUM('active', 'suspend'),
        allowNull: false,
        defaultValue: 'active'
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
    return queryInterface.dropTable('users_mobiles')
  }
}