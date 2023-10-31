const express = require("express");

const routes = (app) => {
    app.use(
        express.json(),
        express.Router("/", (req, res) => { res.status(200).send("Legacy"); })
    );
};

module.exports = routes;