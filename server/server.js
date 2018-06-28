const express = require('express');
const quotes = require('./quotes.js');
const app = express();
const bodyParser = require('body-parser'); // require for POST
const port = process.env.PORT || 5000; 

app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({ extended: true })); // require for POST

app.get('/quotes', quotes.getQuotes);
app.get('/random', quotes.randomQuote);  //add new route 

app.post('/quotes', quotes.newQuotes);



app.listen(port, function() {
    console.log('App is running on ', port)
})



