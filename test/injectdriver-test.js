var expect = require('chai').expect;
var assert = require('chai').assert;
var testHelper = require('./testhelper');

var wrapper = require('../lib/driverwrapper')
describe('Create driver wrapper', function() {

    it('see test works by importing', function () {
      var dw = new wrapper.DriverWrapper();
      assert.isNotNull(dw, 'great, time for tea!');
    });

    it('get underlying driver', function () {
      var dw = new wrapper.DriverWrapper();
      assert.isUndefined(dw.getDriver());
      dw = new wrapper.DriverWrapper(new Object());
      assert.isNotNull(dw.getDriver());
    });

    it('singleton driver injection', function () {
      assert.isTrue(global.driverInited);    
      assert.isNotNull(global.InternalDriver);
    });

});
