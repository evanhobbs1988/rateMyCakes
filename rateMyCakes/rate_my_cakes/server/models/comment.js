
var mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: {type: String, required: true},
    rating: {type: Number, required: true}
    }, {timestamps: true });

mongoose.model('Comment', CommentSchema);

module.export = CommentSchema;