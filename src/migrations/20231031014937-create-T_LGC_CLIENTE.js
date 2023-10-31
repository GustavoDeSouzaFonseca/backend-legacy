'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('T_LGC_CLIENTE', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ds_nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ds_senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nm_empresa:{
        type: Sequelize.STRING,
        allowNull: false
      },
      nr_cnpj: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ds_endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nr_numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nr_telefone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ds_email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dt_created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dt_updated: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dt_deleted: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('T_LGC_CLIENTE');
  }
};