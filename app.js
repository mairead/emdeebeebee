
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

app.get('/articles', articles.year15);
app.get('/articles/2011', articles.year11);
app.get('/articles/2012', articles.year12);
app.get('/articles/2013', articles.year13);
app.get('/articles/2014', articles.year14);
app.get('/articles/2015', articles.year15);

app.get('/articles/2011/creating-responsive-images-using-the-noscript-tag', articles.article01);
app.get('/articles/2011/the-accuracy-of-javascript-timing', articles.article02);
app.get('/articles/2011/net-magazine-asks-how-we-created-our-site', articles.article03);
app.get('/articles/2011/vive-la-revolution-bitcoin-the-currency-of-the-internet', articles.article04);
app.get('/articles/2011/full-frontal-conference-2011', articles.article05);

app.get('/articles/2012/the-incredible-and-amazing-arduino-vote-o-matic', articles.article06);
app.get('/articles/2012/creating-a-responsive-layout-website-part-1', articles.article07);
app.get('/articles/2012/creating-a-responsive-layout-website-part-2', articles.article08);
app.get('/articles/2012/the-joy-of-sass-or-how-i-learned-to-stop-worrying-and-love-the-preprocessor', articles.article09);
app.get('/articles/2012/full-frontal-2012', articles.article10);

app.get('/articles/2013/microsoft-kinect-and-the-web-browser-how-to-make-it-happen', articles.article11);
app.get('/articles/2013/microsoft-kinect-and-the-web-browser-enter-zigfu', articles.article12);
app.get('/articles/2013/kinect-pain-reinstalling-libfreenect-kinect-drivers-on-mountain-lion-upgrade', articles.article13);

app.get('/articles/2014/kings-cultural-institute-culture-hack', articles.article14);
app.get('/articles/2014/why-i-quit-my-job', articles.article15);
app.get('/articles/2014/setting-up-a-limited-company', articles.article16);

app.get('/articles/2015/creating-a-frontend-workflow-with-gulp-and-browserify', articles.article17);
app.get('/articles/2015/getting-started-with-es6', articles.article18);

app.get('/golden_path', golden_path.index)
app.get('/golden_path_manifesto', golden_path.manifesto);
app.get('/golden_path_revisited', golden_path.revisited);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
