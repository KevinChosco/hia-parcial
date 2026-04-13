// Importamos express
const express = require('express');
// Creamos la app
const app = express();
// Definimos una ruta GET
app.get('/', (req, res) => {
 res.json({ mensaje: 'HOLA MUNDO 2.0!' });
});
// Iniciamos el servidor
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});