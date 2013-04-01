
// use dev-port 3000
var express = require('express');
var http = require('http');
var Browser = require('zombie');
var assert = require('assert');
var settings = require('../globalsettings');
var app = require('../app');

describe('Starting server and testing client urls...', function() {

  before(function() {
    this.counter_index = 0;
    this.urls = ['/test_index/', '/'];
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({site: 'http://'+hostname+':'+devport});
  });

  beforeEach(function(done) {
    console.log('visiting: ' + this.urls[this.counter_index]);
    this.browser.visit(this.urls[this.counter_index], done);
    this.counter++;
  });

  it('/test_index should return a 200 response on page', function() {
    assert.ok(this.browser.success);
  });

  it('/index should return a 200 response on page', function() {
    assert.ok(this.browser.success);
  });

});

