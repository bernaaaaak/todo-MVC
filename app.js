"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors")

const PORT = process.env.PORT || 8000;

app.use(express.json())

require('express-async-errors')

app.use(require('./app/routes/todo.router'))

app.use(require('./app/errorHandler'))

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
