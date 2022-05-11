const express = require("express");
const peliculaSchema = require("../models/peliculas");

const router = express.Router();

//crear pelicula
router.post("/peliculas", (req, res) => {
    const peliculas = peliculaSchema(req.body);
    peliculas
    .save()
    .then((data) => res.json(data))
    .catch(() => res.json({ message: error}))
});

//obtener todas las peliculas
router.get("/peliculas", (req, res) => {
    peliculaSchema
    .find()
    .then((data) => res.json(data))
    .catch(() => res.json({ message: error}))
});

//obtener una pelicula por id
router.get("/peliculas/:id", (req, res) => {
    const { id } = req.params;
    peliculaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch(() => res.json({ message: error}))
});

//actualizar una pelicula por id
router.put("/peliculas/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, año, trama } = req.body;
    peliculaSchema
    .updateOne({_id: id }, { $set: {nombre, año, trama}})
    .then((data) => res.json(data))
    .catch(() => res.json({ message: error}))
});

//actualizar un pelicula por id
router.delete("/pelicula/:id", (req, res) => {
    const { id } = req.params;
    peliculaSchema
    .remove({_id: id })
    .then((data) => res.json(data))
    .catch(() => res.json({ message: error}))
});




module.exports = router;