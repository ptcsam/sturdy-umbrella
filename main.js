var apiai = require('apiai');

var app = apiai("3299984d9dd641aa896144a2e9404dd4");

var request = app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
