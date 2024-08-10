var quotes = [
    "Farming is a profession of hope. — Brian Brett",
"To forget how to dig the earth and to tend the soil is to forget ourselves. — Mahatma Gandhi ",
"The farmer has to be an optimist or he wouldn’t still be a farmer. — Will Rogers",
"Farming looks mighty easy when your plow is a pencil and you're a thousand miles from the corn field. — Dwight D. Eisenhower",
"The love of farming is a gift from the earth. — Unknown ",
"Agriculture is the most healthful, most useful, and most noble employment of man. — George Washington",
"Farming is the foundation of civilization and any stable economy. — Unknown",
"In the end, the love you take is equal to the love you make. — Paul McCartney ",
"A good farmer is a craftsman who uses the land to grow food for a nation. — Unknown",
"The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways.— John F. Kennedy",
];

function updateQuote() {
    var quoteElement = document.getElementById('farming-quote');
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

// Initialize quote and set interval for updating
updateQuote();
setInterval(updateQuote, 30000); 