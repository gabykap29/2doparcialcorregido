// Imports
const cors = require('cors');
const express = require('express');

const path = require('path');

require('dotenv').config();
const {sequelize} = require('./database')

sequelize.authenticate()
    .then(() => console.log('Conexión a base de datos exitosa'))
    .catch((error) => console.log('Error al conectar a base de datos', error));

const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));
require('ejs'); 
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

// Routes
app.use( require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// 404 - Not found
app.use((req, res, next) => {
    res.write(`<div>
        <h1>404 - Ruta no encontrada</h1>
        <hr>
        <p>La pagina que intentas buscar no existe</p>
        <p>Redireccionando a la página de inicio...</p>
        <script>
        (
          () => setTimeout(() => {
            window.location.href='http://localhost:${port}/api';
           }, 3000)           
        )();
        </script>
    </h1>`)
});



// Starting the server
app.listen(port, () => console.log(`Server on port http://localhost:${port}/reservas`));