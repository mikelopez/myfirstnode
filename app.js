
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , test_index = require('./routes/test_index')
  , http = require('http')
  , stylus = require('stylus')
  , db_settings = require('./db_settings')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8888);
  app.set('database', db_settings.DB_MYSQL_CONFIG);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('secret123'));
  app.use(express.session());
  app.use(app.router);
  app.use(stylus.middleware({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// the routes
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/test_index', test_index.test_index);

module.exports = app;

if (!module.parent) {
  http.createServer(app).listen(app.get('port'), function(){
    console.log("Server listening on port " + app.get('port'));
  });
}