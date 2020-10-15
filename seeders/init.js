'use strict'

let userList = []
let sayList = []

let element
for (let i = 0; i < 5; i++) {
  element = {
    "uid": "uid" + i,
    "pw": "pw" + i,
    "name": "name" + i,
    "createdAt": new Date(),
    "updatedAt": new Date()
  }
  userList.push(element)
  element = {
    "content": "명언" + i,
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userId": i + 1
  }
  sayList.push(element)
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', userList, {})
    await queryInterface.bulkInsert('says', sayList, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {})
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {})
     */
  }
}