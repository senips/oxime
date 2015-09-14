var expect = require('chai').expect;
var assert = require('chai').assert;

var wrapper = require('../lib/driverwrapper')
describe('launch a browser and open some urls', function() {

    it('open google url and read the title', function () {

      var dw = new wrapper.DriverWrapper(global.InternalDriver);
      dw.openUrl('http://google.com');

    });



});
