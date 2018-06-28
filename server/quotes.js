let quotes = [{
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
    image: 'images/glass.jpg'
},
{
    text: 'Your aspirations are your possibilities',
    author: 'Samuel Johnson',
    image: 'images/glass.jpg'
},

{
    text: 'All our dreams can come true, if we have the courage to pursue them.',
    author: 'Walt Disney',
    image: 'images/glass.jpg'
}
]

function newQuotes (req, res){
    console.log(req.body)
    let newQuote = req.body;
    quotes.push(newQuote)
}

function randomQuote (req, res){
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    res.send(random)
}

function getQuotes (req, res){
    res.send(quotes)
}

module.exports = {
    newQuotes: newQuotes,
    getQuotes: getQuotes,
    randomQuote: randomQuote
}