const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user")
const peliculasRoutes = require("./routes/peliculas")

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes, peliculasRoutes);

/*

Para conectarse:
- npm run start

Para hacer POST, GET, PUT, DELETE:
- instalar extension REST client para comprobar que funcione bien
- llenar datos en request.http y click en "Send Request"

*/


//rutas
app.get ('/', (req, res) => {
    res.send('Bienvenidos a mi API');  
   });
   
//Conexion mongobd
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('conectado a MongoDB Atlas'))
.catch((error) => console.error(error));


app.listen(port, () => console.log('server listening on port', port));


