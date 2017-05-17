// TODO save submissions in LocalStorage so I can refresh the page and not lose my list

// on load get saved submissions and add to the list
var submissions = JSON.parse( localStorage.getItem( 'submissions' ) ) || [];
if ( submissions ) {
    submissions.forEach( function ( submission ) {
        addToList( submission );
    });
}

/* using a separate array

    var submissions = [];
    var savedSubmissions = JSON.parse( localStorage.getItem( 'submissions' ) );
    if ( savedSubmissions ) {
        // OPTION 1 set our submissions array to our save submissions data
        submissions = savedSubmissions; 

        submissions.forEach( function ( submission ) {
            addToList( submission );
            // OPTION 2 add saved submissions to our submissions array and save
            // saveToLocal( submission );
        });
    }



*/



// handle form submission
var submissionForm = document.getElementById( 'elementsForm' );
submissionForm.addEventListener( 'submit', submitHandler );

function submitHandler ( event ) {
    event.preventDefault();

    var form = event.target;
    var name = form.name.value;
    var htmlEle = form.ele.value;

    var submission = { name: name, ele: htmlEle };
    addToList( submission );
    saveToLocal( submission );

    form.reset();
}


function addToList ( submission ) {
    var list = document.querySelector( 'ul' );
    var newLi = document.createElement( 'li' );

    newLi.innerHTML = submission.name + " &#x1F60D;'s " + submission.ele;
    list.appendChild( newLi );
}

function saveToLocal ( submission ) {
    submissions.push( submission );
    localStorage.setItem( 'submissions', JSON.stringify( submissions ) );
}

