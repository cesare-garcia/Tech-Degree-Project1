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

/* Cesar's Note: I have created an array with 6 objects that will store my quotes, sources, citations, and years.
*/
let quotes = [
  {
    quote: "Far better it is to dare mighty things, to win glorious triumphs, even though checkered by failure, than to take rank with those poor spirits who neither enjoy much nor suffer much, because they live in the gray twilight that knows not victory nor defeat.",
    source: "President Theodore Roosevelt",
    citation: "The Strenuous Life",
    year: 1899,
    tags: 'Politics'
  },
  {
    quote: "We have always held to the hope, the belief, the conviction that there is a better life, a better world, beyond the horizon.",
    source: "President Franklin Roosevelt", 
    citation: "Address on Hemispheric Defense",
    year: 1940,
    tags: 'Politics'
  },
  {
    quote: "Don’t ever let somebody tell you you can’t do something, not even me. Alright? You dream, you gotta protect it. People can’t do something themselves, they wanna tell you you can’t do it. If you want something, go get it. Period.",
    source: "Chris Gardner", 
    citation: "The Pursuit of Happyness",
    year: 2006,
    tags: 'Movies'
  },
  {
    quote: "Many things are formidable, but none are more formidable than man.",
    source: "Sophocles", 
    citation: "Ode to Man in Antigone",
    year: "441 BC",
    tags: "Literature"
  },
  {
    quote: "Life's not about how hard of a hit you can give... it's about how many you can take, and still keep moving forward.",
    source: "Rocky", 
    citation: "Rocky Balboa",
    year: 2006,
    tags: 'Movies'
  },
  {
    quote: "The people who are crazy enough to think that they can change the world, are the ones who do.",
    source: "Steve Jobs", 
    citation: "Apple's Think Different Campaign",
    year: 1997,
    tags: 'Business, Technology'
  }
];

console.log(quotes);

/***
 * `getRandomQuote` function
***/

/*Cesar's note: This function will accept my quotes array, then set the quoteNumber variable to a number between
  0 and 5 (0 inclusive). This number will then be used as the index of the array in order to return an object.
*/

let quoteNumber = 0;


function getRandomQuote(quotearray) {
  quoteNumber = Math.floor(Math.random()*6);
  //console.log(quoteNumber);
  return quotearray[quoteNumber];
}

//getRandomQuote(quotes);

/***
 * `printQuote` function
***/
/* Cesar's Note: I am declaring the variables outside of the function (need to check if this is necessary). Inside the function
I am calling the getRandomQuote function to return an object from the quotes array. I am then concatenating object pieces to the
print_html variable, so that I may return it and write it to the website.
*/ 

let quote_object;
let html_print;

function printQuote() {
  quote_object = getRandomQuote(quotes);
  html_print= `
    <p class="quote"> ${quote_object.quote} </p>
    <p class="source"> ${quote_object.source}`;
  //console.log(html_print);
  if ( quote_object.citation ) {
    html_print += `
      <span class="citation"> ${quote_object.citation} </span>`;
  }
  if ( quote_object.year ) {
    html_print += `
      <span class="year"> ${quote_object.year} </span>`;
  }
  html_print += `</p>`;

  console.log(html_print);
  
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);