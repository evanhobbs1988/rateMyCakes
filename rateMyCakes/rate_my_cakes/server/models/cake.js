var mongoose = require('mongoose');

var CommentSchema = require("./comment.js")



const CakeSchema = new mongoose.Schema({
    imgURL: {type: String, required: true},
    bakerName: {type: String, required: true},
    comments: [CommentSchema]
    }, {timestamps: true });

mongoose.model('Cake', CakeSchema);