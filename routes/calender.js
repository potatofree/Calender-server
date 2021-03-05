var express = require('express');
var router = express.Router();
var eventsDbEmulator = require('../emulators/dbEventsEmulator');
var eventController = require('../controllers/eventController');

/* GET calender. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get ('/events', eventController.getEventsList);

// router.get('/events/:id', function(req, res, next) {
//     res.send(eventsDbEmulator.findEventById(req.params.id));
// });

router.get('/events/:id', eventController.getEventById);

// router.post('/events', function(req, res, next) {
//     var event = {
//         name: req.body.name,
//         body: req.body.body,
//     };
//     let id = eventsDbEmulator.addEvent(event);
//     if (id) { 
//         res.status(201).send(`New event added with id = ${id}`);
//     } else {
//         res.status(500).send(`Event wasn't added`);
//     };
// });

router.post('/events', eventController.addEvent);

// router.delete('/events/:id', function(req, res, next) {
//     if (eventsDbEmulator.deleteEvent(req.params.id)) {
//         res.status(200).send(`Event with id: ${req.params.id} deleted`);
//     } else {
//         console.error('There is no event with such id');
//         res.status(404).send('There is no event with such id');
//     };
// });

router.delete('/events/:id', eventController.deleteEvent);

module.exports = router;
