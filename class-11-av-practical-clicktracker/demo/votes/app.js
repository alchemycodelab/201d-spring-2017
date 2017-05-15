//****DATA****//

var allRestaurants = [];

//****CONSTRUCTOR & INSTANCES****//

function Restaurant (name, id) {
    this.name = name;
    this.id = id;
    this.votes = 0;

    allRestaurants.push(this);
}

function instantiateRestaurants() {
    var hand = new Restaurant('Hansel and Gretel\'s Dessert Shoppe', 'hansel-and-gretel');
    var bob = new Restaurant('Bob\'s Burgers', 'bobs-burgers');
    var sun = new Restaurant('Sunstrings', 'sunstrings');
    var spa = new Restaurant('Spaghetti and Ice Cream', 'spaghetti-ice-cream');
    var itis = new Restaurant('The Itis', 'itis');
}

//****DISPLAY & VOTING FUNCTIONS****//

var tracker = {
    option1: document.getElementsByClassName('option1')[0],
    option2: document.getElementsByClassName('option2')[0],
    displaySection: document.getElementById('display'),
    votes: 0,

    randomIndex: function (arr) {
        return Math.floor(Math.random() * arr.length);
    },

    getIndices: function (arr) {
        var selectedIndices = [];
        while ( selectedIndices.length < 2 )  {
            var item = this.randomIndex(arr);

            // using indexOf
            if ( selectedIndices.indexOf( item ) === -1 ) {
                selectedIndices.push( item );
            }

            // using for loop
            // if (selectedIndices.length === 0) {
            //     selectedIndices.push(item);
            // }

            // for ( var i = 0 ; i < selectedIndices.length; i ++ ) {
            //     if ( selectedIndices[i] === item ) {
            //         break;
            //     } else {
            //         selectedIndices.push( item );
            //         break;
            //     }
            // }
        }

        return selectedIndices;
    },

    displayOptions: function () {
        // TODO get 2 random restaurants
        var randomRestaurants = this.getIndices( allRestaurants );
        var index1 = randomRestaurants[0];
        var index2 = randomRestaurants[1];
        
        var restaurant1 = allRestaurants[index1];
        var restaurant2 = allRestaurants[index2];

        // TODO append to DOM
        this.option1.innerText = restaurant1.name;
        this.option2.innerText = restaurant2.name;

        this.option1.id = restaurant1.id;
        this.option2.id = restaurant2.id;

    },

    tallyVote: function ( id ) {
        this.votes += 1;

        // for loop
        // for ( var i = 0; i < allRestaurants.length; i ++ ) {
        //     var restaurant = allRestaurants[i];
        //     if ( restaurant.id === id ) {
        //         restaurant.votes += 1;
        //     }
        // }

        // for each loop
        allRestaurants.forEach(function moo ( restaurant ) {
            if ( restaurant.id === id ) {
                restaurant.votes += 1;
            }
        });
        


        if ( this.votes > 3 ) {
            this.showResults();
        }
    },

    showResults: function () {
        this.displaySection.removeEventListener('click', voteHandler);
        console.table( allRestaurants );
        // for ( var i = 0; i < allRestaurants.length; i ++ ) {
        //     var restaurant = allRestaurants[i];
        //     console.log( restaurant.name + ': ' + restaurant.votes );
        // }
    }
}


//****EVENT LISTENERS****//

tracker.displaySection.addEventListener('click', voteHandler);
function voteHandler () {
    if (event.target.id !== 'display') {
        tracker.tallyVote(event.target.id);
        tracker.displayOptions();
    }
}

//****INITIALIZE APP****//

instantiateRestaurants();
tracker.displayOptions();
