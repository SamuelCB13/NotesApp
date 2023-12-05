const moongose = require('mongoose');

const ProductoSchema = moongose.Schema({

    // Variables del FrontEnd
    
    usuario: {
        type: String,
        require: true
    },
    titulo: {
        type: String,
        require: true
    },
    contenido: {
        type: String,
        require: true
    },
    fecha: {
        type: Date,
        require: true
    },
});

module.exports = moongose.model('Producto', ProductoSchema);