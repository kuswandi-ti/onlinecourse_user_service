'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Administrator',
      profession: 'Administrator Backend Microservice',
      role: 'admin',
      email: 'administrator@mail.com',
      password: await bcrypt.hash('administrator', 10),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: 'John',
      profession: 'Student Backend Microservice',
      role: 'student',
      email: 'john@mail.com',
      password: await bcrypt.hash('john', 10),
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
