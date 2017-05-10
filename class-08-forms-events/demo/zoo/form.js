'use strict';

// Animal constructor function
function Animal ( name, sound ) {
    this.sound = sound;
    this.name = name
}

// create an animal instance and add it to the DOM
var possum = new Animal ( 'possum', 'ello' );
var possumEle = document.createElement( 'div' );
possumEle.classList.add( 'exhibit' );
possumEle.innerText = possum.name;

var zoo = document.getElementById( 'zoo' );
zoo.appendChild( possumEle );

// use the form to create an animal instance and add it to the DOM


// add an event listener so the animal alerts its sound when clicked


// add the rating form dynamically (after they've clicked three times)
