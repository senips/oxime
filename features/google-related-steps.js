var expect = require('chai').expect;
var assert = require('chai').assert;
var wrapper = require('../lib/buildwrapper')


module.exports = function() {
  this.When(/^I search Google for "([^"]*)"$/, function (arg1, done) {
       gBrowserClient.launch();
       gBrowserClient.openUrl('http://google.com');
       done();
  });

  this.Then(/^I should see some results$/, function (done) {
    gBrowserClient.getTitle().then(function(title){
            assert.equal(title, 'Google');
            done();
    });
  });
};
