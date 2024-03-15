"use strict";

const express = require("express");
const app = express();
/* ------------------------------------------------------- */

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost : 3000",
  })
);
app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

/* ------------------------------------------------------- */

console.log("Merhaba Dünya");

require("dotenv").config();
require("express-async-errors");

const PORT = process.env.PORT || 8000;

app.use(express.json());

require("express-async-errors"),
  /* ------------------------------------------------------- */ // Routes:
  app.use(require("./app/routes/todo.router"));
/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
// ErrorHandler:

app.use(require("./app/routes/todo.router"));

app.use(require("./app/errorHandler"));

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});

// Mücahit Buraya bir şeyler yazabilirsin 
// asp
module.exports = app;
