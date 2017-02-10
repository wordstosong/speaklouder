var expressServer = require('express');

var app = expressServer();

app.use(expressServer.static('public'));

var defaultPort = 9239;

var port = process.env.PORT || defaultPort;
app.listen(port, function() {
    console.log('server is listening on port ' + port);
});
