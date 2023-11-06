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
    const cnpjDaEmpresa = req.body.nr_cnpj;
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
      nr_cep: req.body.nr_cep,
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

  static async atualizarEmpresa(req, res, next) {
    const { id } = req.params;
    const novosDados = {
      ds_nome: req.body.ds_nome,
      ds_senha: req.body.ds_senha,
      nm_empresa: req.body.nm_empresa,
      nr_cnpj: req.body.nr_cnpj,
      nr_cep: req.body.nr_cep,
      ds_endereco: req.body.ds_endereco,
      nr_numero: req.body.nr_numero,
      nr_telefone: req.body.nr_telefone,
      ds_email: req.body.ds_email,
      dt_updated: new Date()
    };

    try {
      const empresaEncontrada = await database.T_LGC_CLIENTE.findOne({ where: {id : Number(id)}});
      if(empresaEncontrada) {
        await database.T_LGC_CLIENTE.update(novosDados, { where : { id : Number(id)}});
        const empresaAtualizada = await database.T_LGC_CLIENTE.findOne({ where : { id : Number(id)}});
        res.status(200).send(empresaAtualizada);
      }

      next(new ErroBase("Empresa não encontrada", 404));

    } catch (err) {
      next(err);
    }  
  }

  static async deletarEmpresa(req, res, next) {
    const { id } = req.params;
    const empresaEncontrada = await database.T_LGC_CLIENTE.findOne({ where: { id: Number(id) } });
    try {
      if (empresaEncontrada) {
        await database.T_LGC_CLIENTE.destroy({ where: { id: Number(id) } });
        res.status(200).send({ message: `Usuário de ID ${id} excluído.` });
      } else {
        next(new ErroBase(`ID ${id} de empresa não encontrada para excluir.`, 404));
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ClienteController;