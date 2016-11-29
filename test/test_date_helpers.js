'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.config.includeStack = true;

var DateHelpers = require('../src/DateHelpers');

describe('DateHelper', function() {
  var subject = new DateHelpers()
  
  describe('daysBetween', function() {
    it('returns 24 days', function() {
      expect(
        subject.daysBetween("2016-12-01", "2016-12-25")
      ).to.equal(24)
    });

    it('returns 1 day', function() {
      expect(
        subject.daysBetween("2016-12-24", "2016-12-25")
      ).to.equal(1)
    });

    it('returns 0 days', function() {
      expect(
        subject.daysBetween("2016-12-24T23:37:55.409Z", "2016-12-25")
      ).to.equal(0)
    });
  });
  
  describe('hoursBetween', function() {
    
    it('returns 23 hours', function() {
      expect(
        subject.hoursBetween("2016-12-24T00:37:55.409Z", "2016-12-25")
      ).to.equal(0)
    });
    
  });
  
});
