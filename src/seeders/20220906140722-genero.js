'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const d = new Date();
    return queryInterface.bulkInsert("generos", [{
      nombre: "genero de pruebas",
      imagen: "imagen de pruebas",
      pelicula: 1,
      createdAt: d,
      updatedAt: d
    }])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("generos", null, {});
  }
};
