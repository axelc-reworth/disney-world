'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      peso: {
        type: Sequelize.FLOAT
      },
      historia: {
        type: Sequelize.TEXT
      },
      pelicula_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      queryInterface.addConstraint('characters',  ["pelicula_id"], {
        type: 'FOREIGN KEY',
        name: 'FK_pelicula_id', // useful if using queryInterface.removeConstraint
        references: {
          table: 'movies',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      })
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('characters');
  }
};