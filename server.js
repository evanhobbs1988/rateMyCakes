var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
var session = require('express-session')
app.use(session({
    secret: "evan",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge : 9001}
}))
app.use(bodyParser.json())
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.static(__dirname + '/static'))
const path = require('path')


require('./server/config/mongoose.js')



require('./server/config/routes.js')(app)
app.listen(8000, function(){
    console.log("listening on port 8000")
})