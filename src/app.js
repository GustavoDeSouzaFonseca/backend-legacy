const express = require("express");
const routes = require("./routes/index.js");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros.js")

const app = express();
routes(app);
app.use(manipuladorDeErros);

module.exports = app;