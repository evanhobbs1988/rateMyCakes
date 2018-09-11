const mongoose = require('mongoose');
const Widget = mongoose.model('Widget');
const Comment = mongoose.model('Comment');
const Cake = mongoose.model('Cake');

module.exports = {
    getWidgets: function(req, res){
        console.log("In get all");
        Widget.find({}, function(err, tasks){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({message: "Success", data: tasks})
            }
        });
    },

    createWidget: function(req, res){
        
        console.log("Request.body in create: ", req.body)
        var widget = new Widget(req.body);
    
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        widget.save(function(err) {
        // if there is an error console.log that something went wrong!
            if(err) {
                res.json({message: "Error", error: err})
            } else { // else console.log that we did well and then redirect to the root route
                res.json({message: "Success"})
            }
        });
    },

    deleteWidgetByID: function(req, res) {
        var widget_id = req.params._id;
        console.log("In delete, ID: ", widget_id);
    
        Widget.remove({_id: widget_id}, function(err) {
    
            if(err) {
                res.json({message: "Error", error: err})
    
            } else { // else console.log that we did well and then redirect to the root route
                res.json({message: "Success"})
            }
        });
    },

    getWidgetByID: function(req, res){
        console.log("get by id, id: ", req.params._id)
        Widget.find({ _id : req.params._id}, function(err, tasks){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({message: "Success", data: tasks})
            }
         })
    },

    editWidgetByID: function(req, res) {
        var widget_id = req.params._id;
        console.log("In edit, ID: ", widget_id);
    
        Widget.update({_id: widget_id}, {$set: req.body}, function(err) {
    
            if(err) {
                res.json({message: "Error", error: err})
    
            } else { // else console.log that we did well and then redirect to the root route
                res.json({message: "Success"})
            }
        });
    },


////////////////////////////////////////////////////////////

    getCakes: function(req, res){
        console.log("In get all cakes");
        Cake.find({}, function(err, tasks){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({message: "Success", data: tasks})
            }
        });
    },

    createCake: function(req, res){
        
        console.log("Request.body in create cake: ", req.body)
        var cake = new Cake(req.body);
    
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        cake.save(function(err) {
        // if there is an error console.log that something went wrong!
            if(err) {
                res.json({message: "Error", error: err})
            } else { // else console.log that we did well and then redirect to the root route
                res.json({message: "Success"})
            }
        });
    },

    getCakeByID: function(req, res){
        console.log("get by id cake, id: ", req.params._id)
        Cake.find({ _id : req.params._id}, function(err, tasks){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({message: "Success", data: tasks})
            }
         })
    },

    editCakeByID: function(req, res) {
        var cake_id = req.params._id;
        console.log("In edit, ID: ", cake_id);
    
        Cake.update({_id: cake_id}, {$set: req.body}, function(err) {
    
            if(err) {
                res.json({message: "Error", error: err})
    
            } else { // else console.log that we did well and then redirect to the root route
                res.json({message: "Success"})
            }
        });
    },

    ////////////////////////////////////////////////////////////

    getComments: function(req, res){
        console.log("In get all comments");
        Comment.find({}, function(err, tasks){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({message: "Success", data: tasks})
            }
        });
    },

    createComment: function(req, res){
        
        console.log("Request.body in create comment: ", req.body)
        var comment = new Comment(req.body);
    
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        comment.save(function(err) {
        // if there is an error console.log that something went wrong!
            if(err) {
                res.json({message: "Error", error: err})
            } else { // else console.log that we did well and then redirect to the root route
                res.json({message: "Success"})
            }
        });
    },

    getCommentByID: function(req, res){
        console.log("get by id, id: ", req.params._id)
        Comment.find({ _id : req.params._id}, function(err, tasks){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({message: "Success", data: tasks})
            }
         })
    },


}