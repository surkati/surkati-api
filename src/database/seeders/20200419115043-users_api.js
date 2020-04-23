'use strict'

const bcrypt = require('bcrypt')

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users_apis', [
      {
        name: 'John Doe (free)',
        email: 'free@mail.com',
        password: bcrypt.hashSync('bismillah', 10),
        role: 'free'
      },
      {
        name: 'John Doe (pro)',
        email: 'pro@mail.com',
        password: bcrypt.hashSync('bismillah', 10),
        role: 'pro'
      }
    ], {})
  },

  down: queryInterface => {
      return queryInterface.bulkDelete('users_apis', null, {})
  }
}
