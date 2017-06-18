var chalk = require('chalk');
var exphbs  = require('express-handlebars');
var expressServer = require('express');

var app = expressServer();

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: './views/layouts',
    partialsDir: './views'
}));
app.set('view engine', 'handlebars');

var title = 'Speak Louder!';

app.get('/', function (req, res) {
    res.render('home', { title: title });
});

app.get('/about', function (req, res) {
    res.render('about', { title: title + ' | About' });
});

pp.get('/archive', function (req, res) {
    res.render('archive', { title: title + ' | Archive' });
});

app.use(expressServer.static('public'));

var defaultPort = 8081;

var port = process.env.PORT || defaultPort;
app.listen(port, function() {
    console.log(chalk.blue('server is listening on port ' + port));
});
