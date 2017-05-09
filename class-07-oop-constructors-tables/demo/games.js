'use strict';

// let's make a constructor function for these objects
// note the properties that repeat in each instance -
// these could be inherited instead of passed through

// games as object literals
var monopoly = {
    minPlayers: 2,
    maxPlayers: 4,
    type: 'board',
    owner: 'Mom',
    location: 'basement'
};

var cribbage = {
    minPlayers: 2,
    maxPlayers: 4,
    type: 'board',
    owner: 'Mom',
    location: 'basement'
};

var crazyTaxi = {
    minPlayers: 1,
    maxPlayers: 2,
    type: 'video',
    owner: 'Mom',
    location: 'basement'
};