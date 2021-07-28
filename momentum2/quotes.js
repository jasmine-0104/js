const quotes = [
    {
        quote : "Be yourself; everyone else is already taken.",
        author : "Oscar Wilde"
    },
    {
        quote : "So many books, so little time.",
        author : "Frank Zappa"
    },
    {
        quote : "A room without books is like a body without a soul.",
        author : "Marcus Tullius Cicero"
    },
    {
        quote : "You only live once, but if you do it right, once is enough.",
        author : "Mae West"
    },
    {
        quote : "Be the change that you wish to see in the world.",
        author : "Mahatma Gandhi"
    },
    {
        quote : "If you tell the truth, you don't have to remember anything.",
        author : "Mark Twain"
    },
    {
        quote : "Always forgive your enemies; nothing annoys them so much.",
        author : "Oscar Wilde"
    },
    {
        quote : "Without music, life would be a mistake.",
        author : "Friedrich Nietzsche"
    },
    {
        quote : "We accept the love we think we deserve.",
        author : "Stephen Chbosky"
    },
    {
        quote : "The way to get started is to quit talking and begin doing",
        author : "Walt Disney"
    }
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length - 1)];
console.log(todaysQuote)

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;