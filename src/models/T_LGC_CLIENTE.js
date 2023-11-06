'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class T_LGC_CLIENTE extends Model {
    static associate(models) {
    }
  }
  T_LGC_CLIENTE.init({
    ds_nome: DataTypes.STRING,
    ds_senha: DataTypes.STRING,
    nm_empresa: DataTypes.STRING,
    nr_cnpj: DataTypes.STRING,
    nr_cep: DataTypes.STRING,
    ds_endereco: DataTypes.STRING,
    nr_numero: DataTypes.INTEGER,
    nr_telefone: DataTypes.STRING,
    ds_email: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    underscored: true,
    modelName: 'T_LGC_CLIENTE',
    tableName: "T_LGC_CLIENTE",
    createdAt: "dt_created",
    updatedAt: "dt_updated",
    deletedAt: "dt_deleted",
  });
  return T_LGC_CLIENTE;
};