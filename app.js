const express = require('express');
const server = express();
const items = require('./static/items.json');

server.set('view engine', 'ejs');
server.set('views', './views');

server.get('/', (req, res) => {
    res.render('main');
}); 

server.post('/test', (req, res) => {
    console.log('it`s work');
    res.json({status: 'ok'});
});

server.listen(3000);