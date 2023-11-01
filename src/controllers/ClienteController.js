const ErroBase = require("../errors/ErroBase");
const database = require("../models");

class ClienteController {

  static async listarTodasEmpresasCadastradas(req, res, next) {
    const empresasCadastradas = await database.T_LGC_CLIENTE.findAll()
    try {
      if(empresasCadastradas.length !== 0) {
        res.status(200).send(empresasCadastradas)
      }

      next(new ErroBase("Nenhuma empresa cadastrada!", 404));

    } catch (err) {
      next(err);
    }
  }

  static async listarPorCnpj(req, res, next) {
    const cnpjDaEmpresa = req.nr_cnpj;
    const empresaEncontrada = await database.T_LGC_CLIENTE.findOne({ where : {nr_cnpj: cnpjDaEmpresa}});

    try {
      if(empresaEncontrada) {
        res.status(200).send(empresaEncontrada);
      };

      next(new ErroBase("Empresa não encontrada.", 404));
      
    } catch (err) {
      next(err);
    }
  }

  static async criarNovaEmpresa(req, res, next) {
    const novaEmpresa = {
      ds_nome: req.body.ds_nome,
      ds_senha: req.body.ds_senha,
      nm_empresa: req.body.nm_empresa,
      nr_cnpj: req.body.nr_cnpj,
      ds_endereco: req.body.ds_endereco,
      nr_numero: req.body.nr_numero,
      nr_telefone: req.body.nr_telefone,
      ds_email: req.body.ds_email,
      dt_created: new Date(),
      dt_updated: new Date()
    };

    try {
      const existeCnpj = await database.T_LGC_CLIENTE.findOne({ where : {nr_cnpj: novaEmpresa.nr_cnpj}});

      if(existeCnpj) {
        next(new ErroBase("CNPJ de empresa existente", 401));
      }
      
      const empresaCriada = await database.T_LGC_CLIENTE.create(novaEmpresa);
      res.status(200).send(empresaCriada);      

    } catch (err) {
      next(err);
    }

  }
}

module.exports = ClienteController;