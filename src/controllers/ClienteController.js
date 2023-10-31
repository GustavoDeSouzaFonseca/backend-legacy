const database = require("./models");

class ClienteController {
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
      const empresaCriada = await database.T_LGC_CLIENTE.create(novaEmpresa);
      res.status(200).send(empresaCriada);      
    } catch (err) {
      next(err);
    }

  }
}

module.exports = ClienteController;