//importamos el modulo express
const express = require('express');
//Creamos una instancia del router de express
const router = express.Router();

//cargamos y configuramos multer para los archivos
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
  
const upload = multer({ storage: storage })

const autosController = require('../controllers/autosController')

/*definimos una ruta para obtener todos los autos
Cuando se haga una solicitud GET a la ruta ('/autos/), se ejecutara esta funcion
*/
router.get('/', autosController.getAllAutos);

router.get('/:id', autosController.getAutoById);

router.post('/alta', upload.single('foto'), autosController.createAuto);

router.put('/modificar/:id', upload.single('foto'), autosController.updateAuto);

router.delete('/:id', autosController.deleteAuto);

//exporta el router para que pueda ser utilizado en otros archivos
module.exports = router;