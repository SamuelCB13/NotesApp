const Producto = require("../models/Producto");


exports.crearNota = async (req, res) => {
    try {

        let nota;

        nota = new Producto(req.body);

        await nota.save();
        res.send(nota);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerNota = async (req, res) => {
    try {

        const productos = await Producto.find();
        res.json(productos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarNota = async (req, res) => {
    try {

        const { usuario, titulo, contenido, fecha } = req.body;
        let nota = await Producto.findById(req.params.id);

        if(!nota) {
            res.status(404).json({ message: 'No existe el usuario' })
        }

        nota.usuario = usuario;
        nota.titulo = titulo;
        nota.contenido = contenido;
        nota.fecha = fecha;

        nota = await Producto.findOneAndUpdate({ _id: req.params.id }, nota, { new: true })
        res.json(nota);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerNota = async (req, res) => {
    try {

        let nota = await Producto.findById(req.params.id);

        if(!nota) {
            res.status(404).json({ message: 'No existe el producto' })
        }

        res.json(nota);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarNota = async (req, res) => {
    try {

        let nota = await Producto.findById(req.params.id);

        if(!nota) {
            res.status(404).json({ message: 'No existe el producto' })
        }

        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ massage: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}