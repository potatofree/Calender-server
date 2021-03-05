var Event = require('../models/events');
var async = require('async');

// exports.getEventsList = function(callback) {
//     Event.find({}, function(err, event_list) {
//         if (err) return err;
//         // console.log(event_list);
//         callback(event_list);
//     });
// };

exports.getEventsList = function(req, res, next) {
    let namePattern =  (req.query.name) ? req.query.name : '';

    Event.find({name: {$regex: namePattern, $options: 'i'}})
        .sort({name: req.query.sort_by_name})
        .exec(function(err, eventList) {
            if (err) return next(err);
            res.send(eventList);
    });
};

exports.getEventById = function(req, res, next) {
    Event.findById(req.params.id)
        .exec(function(err, event) {
            if (err) {
                err.status = 404;
                return next(err);
            };
            res.send(event);
        });
};

exports.addEvent = function(req, res, next) {
    var newEvent = new Event(
    {
        name: (req.body.name) ? req.body.name : "",
        body: (req.body.body) ? req.body.body : "",
        start: (req.body.start) ? new Date(req.body.start) : new Date('September 11, 2020 10:00:00'),
        end: (req.body.end) ? new Date(req.body.end) : new Date('September 11, 2020 11:00:00'),  
    }
    );
    newEvent.save(function(err) {
        if (err) return next(err);
        res.send(newEvent);
    });
};

exports.deleteEvent = function(req, res, next) {
    Event.findByIdAndDelete(req.params.id, function deleteEventById (err) {
        if (err) return next(err);
        res.status(200).send(`"Event deleted (id: ${req.params.id})"`);
    });
};