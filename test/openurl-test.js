var expect = require('chai').expect;
var assert = require('chai').assert;
var e2e = require('../lib/promiseaware');
var wrapper = require('../lib/buildwrapper')


e2e.describe('launch a browser and open some urls', function() {

    e2e.it('open google url and read the title', function () {

      gBrowserClient.openUrl('http://google.com');

    });



});
