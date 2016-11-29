/**
 * App ID for the skill
 */
var APP_ID = undefined; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
* Santa App
*
**/
var Santa = function() {
  AlexaSkill.call(this, APP_ID)
}

// Extend AlexaSkill
Santa.prototype = Object.create(AlexaSkill.prototype);
Santa.prototype.constructor = Santa;

Santa.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("HelloWorld onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Santa.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("HelloWorld onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    var speechOutput = "Welcome to the Alexa Skills Kit, you can say hello";
    var repromptText = "You can say hello";
    response.ask(speechOutput, repromptText);
};

Santa.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("HelloWorld onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Santa.prototype.intentHandlers = {
    // register custom intent handlers
  "CountDownIntent": function (intent, session, response) {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date();
    var secondDate = new Date('2016-12-25');

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    var responseText = "There are " + diffDays + " days until Christmas"
    response.tellWithCard(responseText, responseText, responseText);
  },
  "AMAZON.HelpIntent": function (intent, session, response) {
    response.ask("You can say hello to me!", "You can say hello to me!");
  },
  "NaughtyOrNiceIntent": function(intent, session, response) {
    var personName = intent.slots.person_name.value;
    
    var items = [
      "Santa Says that " + personName + " is on the nice list",
      "Santa Says it's complicated",
      "Santa Says to ask about " + personName + " tomorrow",
      "Santa Says " + personName + " is on the naughty and nice list",
      "Santa Says " + personName + " is not on either list.  Oops"
    ]
    
    var responseText = items[Math.floor(Math.random()*items.length)];
    response.tellWithCard(responseText, responseText, responseText);
  },
  
  // Generated
  "HowManyReindeerThereAreIntent": function (intent, session, response) {
    response.tellWithCard("Santa Claus's sleigh is led by eight reindeer: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Dunder, Blixem , and Rudolph", "Santa Claus's sleigh is led by eight reindeer: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Dunder, Blixem , and Rudolph", "Santa Claus's sleigh is led by eight reindeer: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Dunder, Blixem , and Rudolph");
  },
  "WhatColorNoseDoesRudolphsHaveIntent": function (intent, session, response) {
    response.tellWithCard("red", "red", "red");
  },
  "WhereHeLivesIntent": function (intent, session, response) {
    response.tellWithCard("Santa Claus lives in the North Pole", "Santa Claus lives in the North Pole", "Santa Claus lives in the North Pole");
  },
  "WhatHeLikesToEatIntent": function (intent, session, response) {
    response.tellWithCard("Santa Claus lies to eat cookies and milk", "Santa Claus lies to eat cookies and milk", "Santa Claus lies to eat cookies and milk");
  },
  "WhatTheElvesAreDoingIntent": function (intent, session, response) {
    response.tellWithCard("The elves are currently making toys", "The elves are currently making toys", "The elves are currently making toys");
  },
  "AmIOnTheNaughtListIntent": function (intent, session, response) {
    response.tellWithCard("Only Santa Claus can see that list", "Only Santa Claus can see that list", "Only Santa Claus can see that list");
  }
};



// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the HelloWorld skill.
    // var helloWorld = new HelloWorld();
    // helloWorld.execute(event, context);
    
    var santa = new Santa()
    santa.execute(event, context);
};
