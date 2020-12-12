'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$08$0Sn5Jqc.ZDC4xOWiuE7Yn.2mVG0L6Q8wb5JB2ry3Y05nssE6h9XGS', //micontraseña con 8 rounds
            createdAt: new Date(),
            updatedAt: new Date()
            
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};