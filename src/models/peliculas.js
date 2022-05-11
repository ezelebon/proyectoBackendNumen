const mongoose = require("mongoose");

const peliculaSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        año: {
            type: Number,
            required: true
        },
        trama: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('peliculas', peliculaSchema);