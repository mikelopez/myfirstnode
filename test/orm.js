
/* 
 * Test the ORM 
 */
var request = require('supertest');
var express = require('express');
var assert = require('assert');
var orm = require('orm');
var app = require('../app');

describe('Test ORM with Express..', function() {
  before(function() {
    this.db_settings = require('../db_settings');
    app.use(orm.express(this.db_settings.get_db_uri(), {
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

    // setup temp route
    app.get('/test_db', function(req, res) {
      console.log('Called /test_db method');
      //assert.ok(req.db.models.person);
    });
  });

  it("should be able to connect and create a basic table spec", function(done) {
    // add custom route and test
    console.log('check for 200');
    request(app).get('/test_db').expect(200, done);

  });

});
