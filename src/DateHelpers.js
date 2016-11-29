'use strict';

function DateHelpers() {}

DateHelpers.prototype.daysBetween = function(first, second) {
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(first);
  var secondDate = new Date(second);

  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}

DateHelpers.prototype.hoursBetween = function(first, second) {
  var oneHour = 60*60*1000; // minutes*seconds*milliseconds
  var firstDate = new Date(first);
  var secondDate = new Date(second);

  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneHour)));
}

module.exports = DateHelpers;