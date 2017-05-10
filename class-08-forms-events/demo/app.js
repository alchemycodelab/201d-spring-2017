'use strict';

/*                                    EVENT 2 */
/*                    use a DOM event handler */
var alohaForm = document.getElementById( 'aloha' );
alohaForm.onsubmit = greetingHandler;

function greetingHandler ( event ) {
    event.preventDefault();
    alert( 'aloha!!!' );
}

/*                                    EVENT 3 */
/*                       use a event listener */
var greetingForm = document.getElementById( 'hi' );
greetingForm.addEventListener( 'submit', greetingHandler );

function greetingHandler ( event ) {
    event.preventDefault();
    alert( 'see ya later ' + event.target.name.value );
}
