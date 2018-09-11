// Require the Express Module
var express = require('express');
// Connect to mongoose framework
require('./server/config/mongoose.js')
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Require path
var path = require('path');
// Create an Express App
var app = express();
// Read routes

// Use dist for Angular
app.use(express.static( __dirname + '/public/dist/public' ));
// Setting our Static Folder Directory
// app.use(express.static(path.join(__dirname, './static')));
// Integrate body-parser with our App
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// // Setting our Views Folder Directory
// app.set('views', path.join(__dirname, './views'));
// // Setting our View Engine set to EJS
// app.set('view engine', 'ejs');

require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});