require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()

const PORT = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/holamundo', function (req, res) {
    res.send('Hello World');
});

app.get('/prueba', function (req, res) {
    const cdx = {
        'nombre':'Luis',
        'apellido':'Beltran'
    }
    res.render('prueba', cdx)
});

app.get('*', function (req, res) {
    res.send('Error 404, página no encontrada');
});

app.listen(PORT)
console.log(`escuchando el puerto ${PORT}`);