

// const mongoose = require('mongoose');
//     //   Quote = mongoose.model('Quote')

var mainController = require('../controllers/mainController.js');

module.exports = function(app){
    
    // Retrive all widgets
    app.get('/api/widgets', mainController.getWidgets);
    
    // Create Task
    app.post('/api/widgets', mainController.createWidget);
    
    // Delete Task by ID
    app.delete('/api/widgets/:_id', mainController.deleteWidgetByID);
    
    // Retrieve Task by id
    app.get('/api/widgets/:_id', mainController.getWidgetByID);
    
    // Update Task by id
    app.patch('/api/widgets/:_id', mainController.editWidgetByID);




    // Retrive all widgets
    app.get('/api/cakes', mainController.getCakes);

    // Create Task
    app.post('/api/cakes', mainController.createCake);
    
    // Retrieve Task by id
    app.get('/api/cakes/:_id', mainController.getCakeByID);

    app.patch('/api/cakes/:_id', mainController.editCakeByID);



    // Retrive all widgets
    app.get('/api/comments', mainController.getComments);

    // Create Task
    app.post('/api/comments', mainController.createComment);
    
    // Retrieve Task by id
    app.get('/api/comments/:_id', mainController.getCommentByID);


}