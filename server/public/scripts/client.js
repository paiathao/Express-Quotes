console.log('js is ready')

$(document).ready(readyNow);

function readyNow() {
    console.log('ready now')

    $('#submit').on('click', postQuote)
    getAllQuotes();
}

function postQuote() {
    let text = $('.quoteInput').val();
    let author = $('.authorInput').val()
    console.log(text, author)
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: {
            text: text,
            author: author
        }
    }).done(function () {
        // don't need a response unless I want something else done
    }).fail(function(err){
        return alert(err)
    })
    // after POST is done, get all new quotes
    getAllQuotes()
}

function getAllQuotes() {
    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).done(function (response) {
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

