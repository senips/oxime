var expect = require('chai').expect;
var assert = require('chai').assert;
var e2e = require('../lib/promiseaware');
var wrapper = require('../lib/buildwrapper')


e2e.describe('launch a browser and open google', function() {

    e2e.beforeEach(function() {
        gBrowserClient.launch();
    });

    e2e.it('open google url and read the title', function () {

      gBrowserClient.openUrl('http://google.com');
      gBrowserClient.getTitle().then(function(title){
              assert.equal(title, 'Google');
      });

    });


});
