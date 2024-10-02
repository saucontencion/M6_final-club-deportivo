const express = require('express');
const perisitir = require('./service/logica1');
const app = express();


app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html');
    perisitir();
    
})
app.use(express.urlencoded({ extended: false }));
app.post('/',(req,res)=>{
    const algo = req.body.nombre
    perisitir(algo)
})

app.listen(3000,()=>{
    console.log('escuhando puerto 3000');
    
})