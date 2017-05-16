'use strict'

var context = document.getElementById( 'squares' ).getContext( '2d' );
// draw squares on the canvas

var flightChart = new Chart ( context, {
    type: 'line',
    data: {
        labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ],
        datasets: [
            {
                label: 'spirit airlines',
                data: [500,330,414,153,135,532,124,234,234,234,234,523],
                backgroundColor: 'rgba(200,20,20,.5)'
            },
            {
                label: 'american airlines',
                data: [300,338,414,333,333,332,324,234,234,234,234,323],
                backgroundColor: 'rgba(20,200,20,.5)'
            },
            {
                label: 'singapore airlines',
                data: [100,120,245,122,155,156,600,688,132,211,433,155],
                backgroundColor: 'rgba(20,20,200,.5)'
            }
        ]
    }
} );



