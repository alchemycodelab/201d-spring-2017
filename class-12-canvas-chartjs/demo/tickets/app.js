'use strict'

var context = document.getElementById( 'squares' ).getContext( '2d' );

context.fillStyle = 'green';
context.fillRect(10, 10, 500, 500);

context.strokeStyle = "white";

// context.beginPath();
var startingX = randomZ( 0, 10 );
var startingY = randomZ( 0, 10 );

for ( var i = 0; i < "so tired of for loops".length; i ++ ) {
    var movetoX = randomZ( 100, 400 );
    var movetoY = randomZ( 100, 400 );
    context.moveTo( startingX, startingY );
    context.lineTo( movetoX, movetoY );
    context.stroke();
}


function randomZ ( min, max ) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}