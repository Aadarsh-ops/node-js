var events = require('events');
var util = require('util');

var person = function(name) {
    this.name = name;
};

util.inherits(person, event.EventEmitter);

var james = new person('james');
var marry = new person('marry');
var ryu = new person('ryu');

var people =[james,mary,ryu];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + 'said :' + msg);
    });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak','i want a curry');

