'use strict';

// let's make a constructor function for these objects
// note the properties that repeat in each instance -
// these could be inherited instead of passed through

// animals as object literals
var cat = {
    sound: 'purr',
    behavior: 'nap',
    food: 'friskies',
    habitat: 'high places',
    planet: 'earth',
    kingdom: 'animalia',
    speak: function () {
        console.log( sound.toUpperCase() + '!!' );
    }
}

var bird = {
    sound: 'sqwak',
    behavior: 'perch',
    food: 'pellets',
    habitat: 'cage',
    planet: 'earth',
    kingdom: 'animalia',
    speak: function () {
        console.log( sound.toUpperCase() );
    }
}

var human = {
    sound: 'i have a brain',
    behavior: 'walk',
    food: 'spaghetti',
    habitat: 'mall',
    planet: 'earth',
    kingdom: 'animalia',
    speak: function () {
        console.log( sound.toUpperCase() );
    }
}
