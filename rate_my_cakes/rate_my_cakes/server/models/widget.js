
var mongoose = require('mongoose');

const WidgetSchema = new mongoose.Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, default: false},
    description: {type: String, required: true}
        }, {timestamps: true });

mongoose.model('Widget', WidgetSchema);