'use strict'

// Chartjs example
var canvas = document.getElementById( 'flights' );

// creating a new Chart using data in variables
var labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
var spiritAir = {
    label: 'spirit airlines',
    data: [500,100,400,100,554,333],
    backgroundColor: 'rgba(200,200,100,.5)',
    lineTension: 1.2
};

var americanAir = {
    label: 'american airlines',
    data: [800,200,200,400,254,103],
    backgroundColor: 'rgba(200,100,200,.5)',
    lineTension: 0
};

var datasets = [ spiritAir, americanAir ];

var flightPrices = new Chart ( canvas, {
    type: 'line',
    data: {
        labels: labels,
        datasets: datasets
    },
    options: {
        title: {
            display: true,
            text: 'Flight Prices'
        }
    }
});

// creating a new Chart w/o dissecting the data into variables
var flightPrices = new Chart ( canvas, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'spirit airlines',
                data: [500,100,400,100,554,333],
                backgroundColor: 'rgba(200,200,100,.5)',
                lineTension: 1.2
            },
            {
                label: 'american airlines',
                data: [800,200,200,400,254,103],
                backgroundColor: 'rgba(200,100,200,.5)',
                lineTension: 0
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Flight Prices'
        }
    }
});






// drawing with canvas example

// var canvas = document.getElementById( 'squares' );
// var context = canvas.getContext( '2d' );

var context = document.getElementById( 'squares' ).getContext( '2d' );

// to draw a square, give it a color, then give it the squares info
context.fillStyle = "green";
context.fillRect( 0, 0, 500, 500 );

// draw a line: give a color, tell to start somewhere, tell it to end somewhere, tell it to draw
context.strokeStyle = "white";
context.moveTo( 500, 0 );
context.lineTo( randomZ(0,50), randomZ(0,100) );
context.stroke();

function randomZ ( min, max ) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}