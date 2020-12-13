'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$12$8.W5hNt7spcPWEc3AQ3ZNu0iXMGaJKUeDQ5nav1v70pZ5aFgks0qa', //micontraseña en 12 rounds
            createdAt: new Date(),
            updatedAt: new Date()
            
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};