var chalk = require('chalk');
var exphbs  = require('express-handlebars');
var expressServer = require('express');

var app = expressServer();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.use(expressServer.static('public'));

var defaultPort = 8081;


var port = process.env.PORT || defaultPort;
app.listen(port, function() {
    console.log(chalk.blue('server is listening on port ' + port));
});
