var quoteBox = document.getElementById("quoteBox");
var quoteContent = document.getElementById("quoteContent");
var quoteAuther = document.getElementById("quoteAuther");
let lastElementShown = null;

var allQuotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        auther: "Oscar Wilde"
    },
    {
        quote: "So many books, so little time.",
        auther: "Frank Zappa"
    },
    {
        quote: "A room without books is like a body without a soul.",
        auther: "Marcus Tullius Cicero"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        auther: "Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        auther: "Mahatma Gandhi"
    },
    {
        quote: "Life is what happens to us while we are making other plans.",
        auther: "Allen Saunders"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        auther: "Thomas A. Edison"
    },
    {
        quote: "I solemnly swear that I am up to no good",
        auther: "J.K. Rowling"
    },
    {
        quote: "A day without sunshine is like, you know, night.",
        auther: "Steve Martin"
    },
];



function getQuote() {

    const random = Number.parseInt(Math.random() * allQuotes.length + 1);
    // var random = Number(Math.random()*allQuotes.length+1);

    quoteContent.innerHTML = `“${allQuotes[random].quote}”`;
    quoteAuther.innerHTML = `-- ${allQuotes[random].auther}`;
}


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


// // Function to get a random element from the array without repeating the last one
// function getRandomElement(quote) {
//     let currentIndex = quote.indexOf(lastElementShown);
//     let randomIndex;

//     do {
//         randomIndex = Number.parseInt(Math.random() * quote.length);
//     } while (randomIndex === currentIndex);

//     lastElementShown = quote[randomIndex];
//     return quote[randomIndex];
// }

// function getQuote() {   
//     let randomElement = getRandomElement(allQuotes);

//     quoteContent.innerHTML = `“${allQuotes[randomElement].quote}”`;
//     quoteAuther.innerHTML = `-- ${allQuotes[randomElement].auther}`;
// }







// ==> The Real Code That I Take From:-
// // Assuming we have an array of elements
// let elements = ['Element1', 'Element2', 'Element3', 'Element4', 'Element5'];
// let lastElementShown = null;

// // Function to get a random element from the array without repeating the last one
// function getRandomElement(arr) {
//     let currentIndex = arr.indexOf(lastElementShown);
//     let randomIndex;

//     do {
//         randomIndex = Math.floor(Math.random() * arr.length);
//     } while (randomIndex === currentIndex);

//     lastElementShown = arr[randomIndex];
//     return arr[randomIndex];
// }

// // Event listener for the button
// document.getElementById('yourButtonId').addEventListener('click', function() {
//     // Display the random element
//     let randomElement = getRandomElement(elements);
//     console.log(randomElement); // Replace this with your display logic
// });



