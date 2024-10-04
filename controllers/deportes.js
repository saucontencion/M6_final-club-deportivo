const persistir = require("../service/logica1");

buscarTodos =(req, res) => {
  const algo = req.body.nombre;
  const data =  persistir(); 
  res.json(data)
  res.sendFile(__dirname + "/index.html");
 
}
 
module.exports = buscarTodos