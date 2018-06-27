console.log('js is ready')

$(document).ready (readyNow);

function readyNow() {
    console.log('ready now')
    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).done(function(response) {
       for (let i = 0; i < response.length; i++) {
            $('#quotes').append('<li>' + response[i].text + ' - ' + response[i].author + '</li>')  
            console.log(response[i])
        }
        
    }).fail(function(errorResponse) {
        return alert(errorResponse); 
    })

    
}

