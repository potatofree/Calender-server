#! /usr/bin/env node

var eventsDbEmulator = require('./emulators/dbEventsEmulator');
var Event = require('./models/events');
var async = require('async');

var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://sashkavolkov:MhbTj0o4CQ7sblCy@cluster0.bwewj.mongodb.net/calender?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var eventsArray = eventsDbEmulator.listEvents();
var createEvent = async function(e){
    var event = new Event(
        {
            name: e.name,
            body: e.body,
            start: e.start,
            end: e.end,
        }
    );
    
    await event.save();
    console.log(`Event: ${e.name} saved.`);
};

eventsArray.forEach(e => createEvent(e));