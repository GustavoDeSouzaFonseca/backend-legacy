const express = require("express");
const ClienteController = require("../controllers/ClienteController");

const router = express.Router()

router
    .post("/clientes", ClienteController.criarNovaEmpresa)

module.exports = router;