const express = require("express");
const perisitir = require("./service/logica1");
const app = express();

app.use('/',require('./routes/deportes'))
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("escuhando puerto 3000");
});