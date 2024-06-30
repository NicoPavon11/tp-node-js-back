//importamos el modulo express
const express = require('express');
//Creamos una instancia del router de express
const router = express.Router();

const autosController = require('../controllers/autosController')

/*definimos una ruta para obtener todas las peliculas
Cuando se haga una solicitud GET a la ruta ('/autos/), se ejecutara esta funcion
*/
router.get('/', autosController.getAllAutos);

router.get('/:id', autosController.getAutoById);

//router.post('/', autosController.createAuto);

//router.put('/:id', autosController.updateAuto);

router.delete('/:id', autosController.deleteAuto);

//exporta el router para que pueda ser utilizado en otros archivos
module.exports = router;