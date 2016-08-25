var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js')

// remove this when adding public
// app.get('/', function (req, res) {
//     res.send('Hello Express!');
// });

// order matters -- specify middleware at the top
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// for route level
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('About Us!');
});

// to get public pages in app
app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.listen(3000);
app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT + '.');
});
