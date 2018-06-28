const express = require('express');

const quotes = require('./quotes.js');

const app = express();
const port = process.env.PORT || 5000; 

app.use(express.static('server/public')) 

app.get('/quotes', function(req, res) {
    res.send(quotes) 
});



app.listen(port, function() {
    console.log('App is running on ', port)
})



