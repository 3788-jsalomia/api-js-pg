const Autor = require("../models/Autor");

exports.getAllAutores = async (req, res) => {
    try {
        const autores = await Autor.getAll();
        res.json(autores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAutorById = async (req, res) => {
    try {
        const autores = await Autor.getById(req.params.id);
        if (!autores) return res.status(400).json({ message: "Autor no encontrado" });
        res.json(autores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createAutor = async (req, res) => {
    try {
        const autores = await Autor.create(req.body);
        res.status(201).json(autores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateAutor = async (req, res) => {
    try {
        const updated = await Autor.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Autor no encontrado" });
        }
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el autor", error: error.message });
    }
};


exports.deleteAutor = async (req, res) => {
    try {
        const deleted = await Autor.delete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "Autor no encontrado" });
        }
        res.json({ message: "Autor eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el autor", error: error.message });
    }
};
