const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//dar una peticion que responda a post
app.get('/usuario', (req, res) => {
    res.send('get Usuario');
});

app.get('/usuario', (req, res) => {
    //Consultar registro
    res.send('Get Usuario');
});

app.post('/usuario', (req, res) => {
    //Crear nuevos registro
    res.send('Post Usuario');
});

app.put('/usuario/:id', (req, res) => {
    //Actualizar registros
    let body = req.body;

    res.json({
        body
    });

});

app.delete('/usuario', (req, res) => {
    //Eliminar registro
    res.send('Delet Usuario');
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto: ', 3000);
});