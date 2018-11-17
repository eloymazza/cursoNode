const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        name: 'Eloy Mazza'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});