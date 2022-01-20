require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Consultar Datos
//dar una peticion que responda a post
app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});
//Crear nuevos registro
app.post('/usuario', (req, res) => {
    res.json('Post Usuario');
});
//Actualizar registros
app.put('/usuario/:id', (req, res) => {
        let body = req.body;

        if (body.nombre === undefined) {
            res.status(400).json({
                mensaje: "El nombre es necesario"
            });
        } else {
            res.json({
                persona: body
            });

        }
    })
    //Eliminar registro(Cambiar a incactivo)
app.delete('/usuario', (req, res) => {
    res.json('Delet Usuario');
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto: ', process.env.PORT);
})