//importamos el modulo express y cors
const express = require('express');
const cors = require('cors');
const path = require('path');

//creamos una instancia de una aplicacion de express
const app = express();
//importamos el enrutador de peliculas el archivo routes/rutas_autos
const rutasAutos = require('./routes/rutas_autos');

//middleware para analizar cuerpos JSON en las solicitudes entrantes
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

/*Definimos la ruta para autos y llamamos al rutasAutos
para manejar las rutas que comiencen con /autos
*/
app.use('/autos', rutasAutos);

//Definimos el puerto de nuestro servidor
const PORT = 3000;

//Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`);
});