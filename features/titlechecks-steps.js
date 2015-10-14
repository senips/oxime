var expect = require('chai').expect;
var assert = require('chai').assert;
var wrapper = require('../lib/buildwrapper')


module.exports = function() {
    this.Given(/^a web browser$/, function (done) {
        gBrowserClient.launch();
        done();
    });

    this.When(/^I open "([^"]*)"$/, function (url, done) {
        gBrowserClient.openUrl(url);
        done();
    });

    this.Then(/^I expect the title to be "([^"]*)"$/, function (caption, done) {

        gBrowserClient.getTitle().then(function(title){
            assert.equal(caption, title);
            done();

        });
    });
};
