const express = require("express");
const ClienteController = require("../controllers/ClienteController");

const router = express.Router()

router
    .get("/clientes", ClienteController.listarTodasEmpresasCadastradas)
    .get("/clientes/cnpj", ClienteController.listarPorCnpj)
    .post("/clientes", ClienteController.criarNovaEmpresa)
    .put("/clientes/:id", ClienteController.atualizarEmpresa)
    .delete("/clientes/:id", ClienteController.deletarEmpresa);

module.exports = router;