const express = require('express');
const router = express.Router();
const notaController = require('../controllers/notaController');

router.post('/', notaController.crearNota);
router.get('/', notaController.obtenerNota);
router.put('/:id', notaController.actualizarNota);
router.get('/:id', notaController.obtenerNota);
router.delete('/:id', notaController.eliminarNota);

module.exports = router;