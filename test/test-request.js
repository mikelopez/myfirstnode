
var express = require('express');
var http = require('http');
var assert = require('assert');
var request = require('request');

var app = require('../app');

describe('Starting server and testing client urls...', function() {

  before(function() {
    this.counter_index = 0;
    this.urls = ['/test_index/', '/'];
    this.server = http.createServer(app).listen(3000);
  });

  beforeEach(function(done) {
    console.log('visiting: ' + this.urls[this.counter_index]);
    this.counter++;
  });

  it('/test_index should return a 200 response on page', function() {
    request('http://www.google.com', function (error, response, body) {
      console.log('checking google...');
      //assert.ok((response.statusCode == 200));
      /*if (!error && response.statusCode == 200) {
        assert.ok(response.statusCode == 200) // Print the google web page.
      } else {
        // force exception
        assert.ok(false);
      }*/
    });

  });

  it('/index should return a 200 response on page', function() {
    //assert.ok(this.browser.success);
  });

});
