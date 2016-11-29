

function daysBetween(firstDate, secondDate) {
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  // var firstDate = new Date();
  // var secondDate = new Date('2016-12-25');

  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}

function hoursBetween(firstDate, secondDate) {
  
}