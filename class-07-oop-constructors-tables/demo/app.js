'use strict';

// student as object literal
var jeff = {
    firstName: 'Jeff',
    lastInitial: 'G',
    faveNumber: 24,
    stickers: 0,
    intro: function () {
        console.log('My name is ' + this.firstName +
                    ' and my favorite number is ' + this.faveNumber);
    },
    getsStickers: function () {
        this.stickers = Math.floor( Math.random() * (12 - 1 + 1) ) + 1;
    },
    render: function ( table ) {
        var row = document.createElement('tr');
        var nameCell = document.createElement( 'td' );
        nameCell.innerText = this.firstName;
        row.appendChild( nameCell );

        for ( var i = 0; i < this.stickers; i++ ) {
            var cell = document.createElement( 'td' );
            cell.innerText = '*';
            row.appendChild( cell );
        }

        table.appendChild( row );
    }
};

// using a constructor function
function Student( name, lastInitial, faveNumber ) {
    this.firstName = name;
    this.lastInitial = lastInitial;
    this.faveNumber = faveNumber;
    this.stickers = 0;
};

Student.prototype.school = 'Code Fellows';

Student.prototype.intro = function () {
    console.log('My name is ' + this.firstName + 
                ' and my favorite number is ' + this.faveNumber);
}

Student.prototype.getsStickers = function () {
    this.stickers = Math.floor( Math.random() * (12 - 1 + 1) ) + 1;
}

Student.prototype.render = function ( table ) {
    var row = document.createElement( 'tr' );
    var nameCell = document.createElement( 'td' );
    nameCell.innerText = this.firstName;
    row.appendChild( nameCell );

    for ( var i = 0; i < this.stickers; i++ ) {
        var cell = document.createElement( 'td' );
        cell.innerText = '*';
        row.appendChild( cell );
    }

    table.appendChild(row);
};

// create students with our constructor function
var jeff = new Student( 'Jeff', 'G', 24 );
var britney = new Student( 'Britney', 'B', 11 );
var miguel = new Student( 'Miguel', 'A', 4 );

// we could also add to students from our constructor
var students = [ jeff, britney, miguel ]; 



// give students some stickers
jeff.getsStickers();
britney.getsStickers();
miguel.getsStickers();


// append stickers to table
var tableEle = document.getElementById('stickers');

for (var i = 0; i < students.length; i++) {
    var student = students[i];
    student.render( tableEle ); // add data to the table
}