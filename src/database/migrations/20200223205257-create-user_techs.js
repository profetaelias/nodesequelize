'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users_Techs', { 
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model:'Users', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        tech_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model:'Techs', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,        
        },
        createdAt: {
          type: Sequelize.DATE, 
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE, 
          allowNull: false,
        },                
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users_Techs');
  }
};
