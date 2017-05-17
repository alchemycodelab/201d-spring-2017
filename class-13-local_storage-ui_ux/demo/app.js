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

    form.reset();
}

var list = document.querySelector( 'ul' );
function addToList ( submission ) {
    var newLi = document.createElement( 'li' );
    newLi.innerHTML = submission.name + " &#x1F60D;'s " + submission.ele;
    list.appendChild( newLi );
}

// TODO save submissions in LocalStorage so I can refresh the page and not lose my list