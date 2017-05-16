var maze = {
    turnRight: function () {
        console.log( 'I turned right' );
    },
    turnLeft: function () {
        console.log( 'I turned left' );
    },
    goStraight: function () {
        console.log( 'I went straight' );
    },
    move: function() {
        this.turnLeft();
        this.goStraight();
        this.turnRight();
        console.log( 'I made it out of the maze!' );
    }
};

maze.move();


/*  all together now! 

write four functions
each function will console.log a line from the following stanza

    She says, we've got to hold on to what we've got
    Cause it doesn't make a difference if we make it or not
    We've got each other and that's a lot for love
    We'll give it a shot

call the functions manually in your browser console
singLineOne(); // "She say's we've got to hold on to what we've got"







now call the next line's function from the one that comes before it
so when you call the first function, it will print the whole stanza
singLineThree(); // "We've got each other and that's a lot for love
                     We'll give it a shot"









bonus round! choose one
1. add all functions to an object called "song" - how do you "play" the song?
2. move the functions out of order - just for the fun of it   
do they still work? what if you call them in between creating them instead of from the console?
what if you change them from function declarations to function expressions?                 

*/
