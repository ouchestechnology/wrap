var PORT = process.env.PORT || 5000;
const express = require('express');
const app = express()
var exphbs  = require('express-handlebars');

var http = require('http');
var server = http.Server(app);

app.use('/static', express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res){
    res.render('home');
});

app.get('/docs', function (req, res){
    res.render('docs');
});

app.get('/login', function (req, res){
    res.render('login');
});

app.get('/signup', function (req, res){
    res.render('signup');
});

server.listen(PORT, function (){
    console.log('working');
})