'use strict';

/*                                    EVENT 2 */
/*                    use a DOM event handler */
var alohaForm = document.getElementById( 'aloha' );
alohaForm.onsubmit = alohaHandler;

function alohaHandler ( event ) {
    event.preventDefault();
    alert( 'aloha!!!' );
}

/*                                    EVENT 3 */
/*                       use a event listener */
var greetingForm = document.getElementById( 'hi' );
greetingForm.addEventListener( 'submit', greetingHandler );

// var hello = 'whaat';
// greetingForm.addEventListener( 'submit', function () {
//     event.preventDefault();
//     greetingHandler( hello );
// });

function greetingHandler ( event ) {
    event.preventDefault();
    console.log( event.target.name.value );

    // document.getElementById()

    alert( 'see ya later ' + event.target.name.value );
}
