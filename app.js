
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var golden_path = require('./routes/golden_path');
var articles = require('./routes/articles');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/slides', function(req, res){
  res.sendfile('./public/index.html');
});

app.get('/articles', articles.index);
app.get('/articles/2012', articles.year12);
app.get('/articles/2013', articles.year13);
app.get('/articles/2014', articles.year14);
app.get('/articles/2015', articles.year15);

app.get('/golden_path', golden_path.index)
app.get('/golden_path_manifesto', golden_path.manifesto);
app.get('/golden_path_revisited', golden_path.revisited);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
