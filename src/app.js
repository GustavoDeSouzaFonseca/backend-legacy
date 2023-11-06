const express = require("express");
const routes = require("./routes/index.js");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros.js");
const cors = require('cors');

const app = express();
app.use(cors());
routes(app);
app.use(manipuladorDeErros);

module.exports = app;