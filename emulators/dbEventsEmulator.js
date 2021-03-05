const { enabled } = require("debug");

const STOREDEVENTS = [
    {
    name: "First event",
    body: "Very cool first event",
    start: new Date('September 10, 2020 09:20:00'),
    end: new Date('September 10, 2020 10:30:00'),
    id: 1,
    },
    {
    name: "Second event",
    body: "Not so cool event",
    start: new Date('September 10, 2020 11:00:00'),
    end: new Date('September 10, 2020 13:30:00'),
    id: 2,
    },
    {
    name: "One more event",
    body: "Don't forget to eat smth",
    start: new Date('September 10, 2020 14:00:00'),
    end: new Date('September 10, 2020 15:30:00'),
    id: 3,
    },
    {
    name: "Stay cool",
    body: "Do it one more time",
    start: new Date('September 10, 2020 15:45:00'),
    end: new Date('September 10, 2020 18:00:00'),
    id: 4,
    },    
];

var events = STOREDEVENTS;
var nextId = events.length + 1;

exports.addEvent = function(event) {
    let newEvent = {
        name: (event.name) ? event.name : "",
        body: (event.body) ? event.body : "",
        start: (event.start) ? event.start : new Date('September 11, 2020 10:00:00'),
        end: (event.end) ? event.end : new Date('September 11, 2020 11:00:00'),
        id: nextId,
    };
    nextId += 1;
    events.push(newEvent);
    return newEvent.id;
};

exports.listEvents = function() {
    return events;
};

exports.findEventById = function(id) {
    let foundEvent = events.find(event => event.id == id);
    return foundEvent;
};

exports.deleteEvent = function(id) {
    let idToDelete = events.findIndex(event => event.id == id);
    //findIndex returns -1 if no element found
    if (idToDelete+1) {
        events = [...events.slice(0, idToDelete), ...events.slice(idToDelete+1)];
        return true;
    } else {
        return false;
    };
};

exports.listEventsByName = function(name) {
    let searchResult = events.filter(event => event.name.includes(name));
    return searchResult;
};

exports.listEventsSortedByName = function(order) {
    //p = 1 to asc; p = -1 to desc    
    let p = 1;
    function compare(a, b) {
        if (a.name < b.name) {
          return -1 * p;
        }
        if (a.name > b.name) {
          return 1 * p;
        }
        // a must be equal to b
        return 0;
      };

    if (order=='asc') { 
        return events.sort(compare);
    } else if (order=='desc') {
        p = -1;
        return events.sort(compare);
    } 
    return '';
};