var chalk = require('chalk');
var exphbs  = require('express-handlebars');
var expressServer = require('express');
var openBrowser = require('./tools/openBrowser');

var isDev = process.env.NODE_ENV === 'development';
var app = expressServer();

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: './views/layouts',
    partialsDir: './views'
}));
app.set('view engine', 'handlebars');

var title = 'Speak Louder!';

/* pages */

app.get('/', function (req, res) {
    res.render('home', { title: title });
});

app.get('/about', function (req, res) {
    res.render('about', { title: title + ' | About' });
});

app.get('/archive', function (req, res) {
    res.render('archive', { title: title + ' | Archive' });
});

app.get('/cast', function (req, res) {
    res.render('cast', { title: title + ' | Cast' });
});

/* comics */

app.get('/01-death-with-dignity', function (req, res) {
    res.render('comic/01-death-with-dignity', {title: title + ' | 01 - Death with Dignity'});
});

app.use(expressServer.static('public'));

var defaultPort = 8081;

var port = process.env.PORT || defaultPort;
app.listen(port, function() {
    console.log(chalk.blue('server is listening on port ' + port));

    if (isDev) {
        var browserSync = require('browser-sync');
        var bsPort = port + 1;
        browserSync({
            files: ['public/**/*.{html,js,css}', 'views/**/*.handlebars'],
            online: false,
            open: false,
            port: bsPort,
            proxy: 'localhost:' + port,
            ui: false
        });
        openBrowser(bsPort);
    }
});