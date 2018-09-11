// const Task = mongoose.model('Task');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cake_db');
console.log("In mongoose file");

const path = require('path');
const fs = require('fs');

mongoose.Promise = global.Promise;

// create a variable that points to the models folder
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
   }
})