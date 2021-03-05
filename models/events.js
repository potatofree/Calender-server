var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new Schema (
    {
        name: {type: String, required: true},
        body: {type: String},
        start: {type: Date, required: true},
        end: {type: Date, required: true},
    }
);

EventSchema
.virtual('url')
.get(function() {
    return '/calender/events/' + this._id;
});

module.exports = mongoose.model('Events', EventSchema);