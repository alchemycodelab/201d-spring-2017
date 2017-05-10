'use strict';

// Animal constructor function
function Animal ( name, sound ) {
    this.sound = sound;
    this.name = name;
}

// create an animal instance and add it to the DOM
var possum = new Animal ( 'possum', 'ello' );
var possumEle = document.createElement( 'div' );
possumEle.classList.add( 'exhibit' );
possumEle.innerText = possum.name;

var zoo = document.getElementById( 'zoo' );
zoo.appendChild( possumEle );

// use the form to create an animal 
// instance and add it to the DOM
var newAnimal = document.getElementById( 'addAnimal' );
newAnimal.addEventListener( 'submit', addNewAnimal );

function addNewAnimal () {
    event.preventDefault();
    var form = event.target;

    var name = form.name.value;
    var sound = form.sound.value;
    // create a new animal
    var newA = new Animal ( name, sound );
    console.log( newA );

    // add animal to the DOM
    var newAnimalEle = document.createElement( 'div' );
    newAnimalEle.classList.add( 'exhibit' );
    newAnimalEle.innerText = name;

    zoo.appendChild( newAnimalEle );
}

// add an event listener so the animal alerts its sound when clicked


// add the rating form dynamically (after they've clicked three times)
