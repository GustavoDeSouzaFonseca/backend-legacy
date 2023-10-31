const express = require("express");
const cliente = require("./ClienteRoute.js");

const routes = (app) => {
    app.use(
        express.json(),
        express.Router("/", (req, res) => { res.status(200).send("Legacy"); }),
        cliente
    );
};

module.exports = routes;