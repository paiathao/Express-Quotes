let quotes = [{
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt'
},
{
    text: 'Your aspirations are your possibilities',
    author: 'Samuel Johnson'
},

{
    text: 'All our dreams can come true, if we have the courage to pursue them.',
    author: 'Walt Disney'
}
]

function newQuotes (req, res){
    console.log(req.body)
    let newQuote = req.body;
    quotes.push(newQuote)
}

function getQuotes (req, res){
    res.send(quotes)
}

module.exports = {
    newQuotes: newQuotes,
    getQuotes: getQuotes
}