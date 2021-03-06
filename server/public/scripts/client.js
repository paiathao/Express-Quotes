console.log('js is ready')

$(document).ready(readyNow);

function readyNow() {
    console.log('ready now')

    $('#submit').on('click', postQuote)
    $('#random').on('click', randomQuote)
    getAllQuotes();
}

function randomQuote(){
    $.ajax({
        url: '/random',
        method: 'GET'
    }).done(function (response) {
        // .empty() will clear my div before it appends all quotes again
        $('#quotesContainer').empty();
        // this gets all my quotes
        $('#quotesContainer').append(`
            <div class="card">
            <div class="card-header">
              Quote
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <img src="${response.image}" width="220" height="300">
                <p id="quotesContainer">${response.text}</p>
                <footer class="blockquote-footer"><cite title="Source Title">${response.author}</cite></footer>
              </blockquote>
            </div>
            </div>`)
    }).fail(function (errorResponse) {
        return alert(errorResponse);
    })
}

function postQuote() {
    let text = $('.quoteInput').val();
    let author = $('.authorInput').val()
    let image = 'images/glass.jpg' //added images
    console.log(text, author)
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: {
            text: text,
            author: author,
            image: image //passes image data into server
        }
    }).done(function () {
        // don't need a response unless I want something else done
    })
    // after POST is done, get all new quotes
    getAllQuotes()
}

function getAllQuotes() {
    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).done(function (response) {
        console.log(response)
        // .empty() will clear my div before it appends all quotes again
        $('#quotesContainer').empty();
        // this gets all my quotes
        for (let i = 0; i < response.length; i++) {
            $('#quotesContainer').append(`
            <div class="card">
            <div class="card-header">
              Quote
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <img src="${response[i].image}" width="220" height="300">
                <p id="quotesContainer">${response[i].text}</p>
                <footer class="blockquote-footer"><cite title="Source Title">${response[i].author}</cite></footer>
              </blockquote>
            </div>
            </div>`)
            console.log(response[i])
        }

    }).fail(function (errorResponse) {
        return alert(errorResponse);
    })
}

