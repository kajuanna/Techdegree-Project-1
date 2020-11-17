/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


var quotes = [{
quotes:"My mom alwasys said life is like a box of chocolates.You never know what your gonna get",
source:'Tom Hanks',
citation:'Forest Gump',
},
{
    quotes:"My mama says that stupid is as stupid does",
    source:'Tom Hanks',
},
{
      quotes:"Christmas doesn't come from a store,maybe...Christmas perhaps means a little bit more",
      source:'Dr.Suess',
      year: 1994,
},   
{
  quotes: "Christmas isn't about Rudolph's Red Nose",
  source:'Dr.Suess',
},
{
  quotes:"Gifts without feelings are wasted",
  source:'Dr.Suess',
}
]
//This function generates random quotes using the following formulas to return the expected.
//The quoteArray is called by the GetRandom Function. The quoteIndex computes the random quote from lowest value of the quote Index 0 to any ending value of the array. 
function getRandomQuote(quoteArray) {
  var quoteIndex = Math.floor(Math.random() * quoteArray.length);
  var randomQuote = quoteArray[quoteIndex];
  return randomQuote;
}

//The obeject retrieves a random quote and formats into an HTML string returns it to the HTML doc. 
function printQuote(){ 
  var quoteObject = getRandomQuote(quotes)
  var HTML = '<p class="quote"> '+ quoteObject.quotes + ' </p> <p class="source"> '+quoteObject.source+ ""

  if (quoteObject.citation !== undefined ) { 
   HTML += '<span class="citation"> '+ quoteObject.citation +'</span>'
  }
  
  if (quoteObject.year !== undefined ) { 
    HTML += '<span class="year"> '+quoteObject.year+'</span>'
  }
  HTML += '</p>';

  return document.getElementById('quote-box').innerHTML = HTML;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
