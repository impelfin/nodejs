const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post("/data", (req, res) => {
    var {id, name} = req.body;
    console.log({id, name});
});

module.exports = app;
