// MVP of guessing game!

var busLines = [ 1, 5, 7, 13, 20, 64 ]; /// busLines.length 6

// TODO check if busLineGuess equals a value in correctAnswers
for ( var guesses = 0; guesses < 3; guesses ++ ) {
    var busLineGuess = parseInt( prompt( 'What TriMet lines are down? There are multiple correct answers. You have three guesses.' ) );
    console.log( 'LOOP 1 | we are on guess #:', guesses + 1 );

    // loop over items in array
    for ( var i = 0; i < busLines.length; i ++ ) {
        console.log( 'LOOP 2 | we are looking the ', i, ' of busLines. Its data: ', busLines[i]);
        console.log( 'their guess: ', busLineGuess, ' | current array element: ', busLines[i] );

        if ( busLineGuess === busLines[i] ) {
            alert( 'you guessed correctly!' );
            break;
        }

        if ( i === busLines.length - 1 ) {
            alert( 'nope, sorry' );
        }
    }

}

