'use strict'

const bcrypt = require('bcrypt')

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users_webs', [
      {
        name: 'John Doe (developer)',
        email: 'developer@mail.com',
        password: bcrypt.hashSync('bismillah', 10),
        role: 'developer'
      },
      {
        name: 'John Doe (admin)',
        email: 'admin@mail.com',
        password: bcrypt.hashSync('bismillah', 10),
        role: 'admin'
      },
      {
        name: 'John Doe (admin_halaqoh)',
        email: 'admin_halaqoh@mail.com',
        password: bcrypt.hashSync('bismillah', 10),
        role: 'admin_halaqoh'
      }
    ], {})
  },

  down: queryInterface => {
      return queryInterface.bulkDelete('users_webs', null, {})
  }
}
