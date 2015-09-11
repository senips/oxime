var x = require('./cmn'),
    expect = require('chai').expect;

var company = 'xxx';

describe('Dummy Test', function() {
  describe('------', function () {
    it('see test works', function () {
      expect(company).to.equal('xxx');
    });
  });
});
