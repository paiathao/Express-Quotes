console.log('js is ready')

$(document).ready(readyNow);

function readyNow() {
    console.log('ready now')
    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).done(function (response) {
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

