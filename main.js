/*  
    Uses express, dbcon for database connection, body parser to parse form data 
    handlebars for HTML templates  
*/

var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var handlebars = require('express-handlebars').create({
        defaultLayout:'main',
        helpers: {
            ifEquals: function(v1, v2, options) { if(v1 === v2) { return options.fn(this); } return options.inverse(this);},
        }
        });

app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('public'));
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);
app.set('mysql', mysql);

app.use('/products', require('./products.js'));
app.use('/bookstores', require('./bookstores.js'));
app.use('/customers', require('./customers.js'));
app.use('/sales', require('./sales.js'));
app.use('/products_bookstores', require('./products_bookstores.js'));
app.use('/products_sales', require('./products_sales.js'));
app.use('/home', require('./home.js'));


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
