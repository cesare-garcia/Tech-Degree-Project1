/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Note: I have created an array with 6 objects that will store my quotes, sources, citations, and years.
let quotes = [
  {
    quote: "Far better it is to dare mighty things, to win glorious triumphs, even though checkered by failure, than to take rank with those poor spirits who neither enjoy much nor suffer much, because they live in the gray twilight that knows not victory nor defeat.",
    source: "President Theodore Roosevelt",
    citation: "The Strenuous Life",
    year: 1899
  },
  {
    quote: "We have always held to the hope, the belief, the conviction that there is a better life, a better world, beyond the horizon.",
    source: "President Franklin Roosevelt", 
    citation: "Address on Hemispheric Defense",
    year: 1940
  },
  {
    quote: "Don’t ever let somebody tell you you can’t do something, not even me. Alright? You dream, you gotta protect it. People can’t do something themselves, they wanna tell you you can’t do it. If you want something, go get it. Period.",
    source: "Chris Gardner", 
    citation: "The Pursuit of Happyness",
    year: 2006
  },
  {
    quote: "Many things are formidable, but none are more formidable than man.",
    source: "Sophocles", 
    citation: "Ode to Man in Antigone",
    year: "441 BC"
  },
  {
    quote: "Life's not about how hard of a hit you can give... it's about how many you can take, and still keep moving forward.",
    source: "Rocky", 
    citation: "Rocky Balboa",
    year: 2006
  },
  {
    quote: "The people who are crazy enough to think that they can change the world, are the ones who do.",
    source: "Steve Jobs", 
    citation: "Apple's Think Different Campaign",
    year: 1997
  }
];

console.log(quotes);

/***
 * `getRandomQuote` function
***/

//Note: This function will use a random number that will then be matched with a quote. 

let quoteNumber = 0;

function getRandomQuote() {
  quoteNumber = Math.floor(Math.random()*6);
  while ( quoteNumber == 6 ) {
    quoteNumber = Math.floor(Math.random()*6);
  }
  return quoteNumber;
}

getRandomQuote();

/***
 * `printQuote` function
***/

function printQuote() {



}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);