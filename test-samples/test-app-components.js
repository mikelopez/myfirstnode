var http = require('http');
var urls = require('url');
var orm = require('orm');
var express = require('express');
var db_settings = require('../db_settings');

exports.testSettings = function(test) {
  // ensure settings are present
  test.ok(true, (db_settings.DB_MYSQL_CONFIG.username == 'user'));
  test.ok(true, (db_settings.get_db_uri()));
  test.done();
};

exports.testClient = function(test){
  // test the server is running 
  // and we can connect with the client
  test.expect(1);
  test.ok(true, "this assertion should pass");
  
  // create the client 
  var options = {
    hostname: '127.0.0.1',
    port: 8888,
    method: "GET",
    path: "/test_index/"
  };
  var req = http.request(options, function(res) {
    console.log('status ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));
    test.ok(true, (res.statusCode == 200));
  });
  req.on('error', function(e) {
   console.log('problem with request: ' + e.message);
  });
  req.write('data\n');
  req.write('data\n');
  req.end();

  test.done();
};


exports.testORM = function(test) {
  // test the orm stuff with express
  var app = express();
  app.use(orm.express(db_settings.get_db_uri(), {
    define: function (db) {
      db.define("person", {
        name    : String,
        surname   : String,
        age     : Number,
        male    : Boolean,
        continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
        photo   : Buffer, // BLOB/BINARY
      });
      // call this to stop tests from hanging
      db.close()
    }
  }));
  test.done();

};

exports.testRoutes = function(test) {
  // test the routes 
  test.done();
};




