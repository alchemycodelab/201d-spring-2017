/*

models: menu, customer

customer 
    name
    table
    order
    pay ()
    assignTable ()
    placeOrder ()
*/

var customerOne = {
    table: 0,
    order: [],
    name: 'Francis',
    pay: function () {
        // reset all values
    },
    assignTable: function () {
        var randTable = Math.floor( Math.random() * 5 + 1 );

        this.table = randTable;
    },
    placeOrder: function ( food ) {
        this.order.push( food );
    }
};

var customerTwo = {
    table: 0,
    order: [],
    name: 'Pikachu',
    pay: function () {

    },
    assignTable: function () {
        var randTable = Math.floor( Math.random() * 5 + 1 );

        this.table = randTable;
    },
    placeOrder: function ( food ) {
        this.order.push( food );
    }
};

customerOne.assignTable();
customerTwo.assignTable();

customerOne.placeOrder( 'french fries' );
customerTwo.placeOrder( 'cheetos' );

console.log( customerOne, customerTwo );

// add users to their tables

// get the customer's table number
// get the table's unordered list
// create a li element 
// add text to li: customer's name and order
// add li to the table's ul


// add customerOne to their table
var c1TableNum = customerOne.table;
var tableList = document.getElementById( "table-" + c1TableNum ); // ul
var c1OrderLi = document.createElement( "li" ); // li

c1OrderLi.innerText = customerOne.name + " ~ " + customerOne.order;
tableList.appendChild( c1OrderLi );


