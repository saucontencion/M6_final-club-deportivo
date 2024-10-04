const fs = require("node:fs");
const path = require("node:path");

const persistir = () => {
  const raiz = path.resolve(__dirname, "..");
  const filePath = path.join(raiz, "data", "persista.json");

  // Nuevos datos que quieres agregar
  const newData = { nombre: "Tenis", precio: 200 };

  // Leer el archivo existente
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo", err);
      return;
    }

    // Parsear el contenido del archivo
    let jsonData;
    try {
      jsonData = JSON.parse(data);
    } catch (parseErr) {
      console.error("Error al parsear el archivo JSON", parseErr);
      return;
    }

    // Agregar los nuevos datos
    jsonData.deportes.push(newData);

    // Escribir el archivo actualizado
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.log("Error al escribir el archivo", err);
      } else {
        console.log("Datos actualizados correctamente:", JSON.stringify(jsonData));
      }
    });
  });
};


module.exports = persistir;
