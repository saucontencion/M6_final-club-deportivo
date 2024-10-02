const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html');
    console.log(__dirname);
    
})

app.listen(3000,()=>{
    console.log('escuhando puerto 3000');
    
})