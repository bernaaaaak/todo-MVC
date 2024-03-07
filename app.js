"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors")

const PORT = process.env.PORT || 8000;

// Accept json data and convert object:
app.use(express.json())

// Catch async-errors:
require('express-async-errors')
/* ------------------------------------------------------- */,
// Routes:
app.use(require('./app/routes/todo.router'))
/* ------------------------------------------------------- */
// ErrorHandler:
app.use(require('./app/errorHandler'))

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
