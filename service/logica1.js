const fs = require('node:fs');
const path = require('node:path');
const perisitir = (algo)=> {

/*     fs.write(filePath, buffer, offset, length, position, callback); */
    
    // Ruta al archivo persista.json
    const raiz = path.resolve(__dirname,'..');

    const filePath = path.join(raiz, 'data', 'persista.json');
    console.log(process.cwd());
     
    // Nuevos datos que quieres agregar
    const newData = { nombre: 'Tenis', precio: 200, otro: algo };
    
    // Leer el archivo existente
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo', err);
        return;
      }
    
      // Parsear el contenido del archivo
      let jsonData = JSON.parse(data);
      console.log(typeof(jsonData));

      
      // Agregar los nuevos datos
      Object.assign(jsonData, newData)
      // Escribir el archivo actualizado
      fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
        console.log('por si hay error :  null es que no hay = '+err);
        
      })})
}
module.exports = perisitir