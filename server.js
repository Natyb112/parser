require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//todos los endpoints
app.use(require('./server/routes/usuario'));

/* Conexion con la BDD */
mongoose.connect(process.env.URLDB, { useNewUrlParser: true },
    (err, res) => {
        if (err) {
            throw err;
        }
        console.log("Base de datos ON LINEA! ");

    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto: ', process.env.PORT);
});