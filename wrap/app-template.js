const express = require('express')
const app = express()
var exphbs  = require('express-handlebars');
var router = express.Router();

app.use('/static', express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

router.get('/', function(req, res) {
    res.render('home', {title:Express});
  });
  module.exports = router;
  router.get('/docs', function(req, res, next) {
    res.render('home', {title:Express});
  });
  module.exports = router;
app.listen(3000, () => console.log('working'))