'use strict'

const bcrypt = require('bcrypt')

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users_mobiles', [
      {
        name: 'John Doe (ustadz)',
        email: 'ustadz@mail.com',
        password: bcrypt.hashSync('bismillah', 10),
        role: 'ustadz'
      },
      {
        name: 'John Doe (member)',
        email: 'member@mail.com',
        password: bcrypt.hashSync('bismillah', 10),
        role: 'member'
      }
    ], {})
  },

  down: queryInterface => {
      return queryInterface.bulkDelete('users_mobiles', null, {})
  }
}
