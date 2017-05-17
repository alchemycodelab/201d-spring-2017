   /*

    - global variables and functions
    - call functions


    */
    var hundredEle = document.getElementById( 'one-hundred' );
    hundredEle.addEventListener( 'click', function () {
        plus( event, '100 is listening' );
    });

    var element2 = document.getElementById('fifty');
    element2.addEventListener('click', function () {
        plus(event, '50 is listening');
    });

    var element3 = document.getElementById('twenty');
    element3.addEventListener('click', function () {
        plus(event, '20 is listening');
    });

    var ele4 = document.getElementById('ten');
    ele4.addEventListener('click', function () {
        plus(event, '10 is listening');
    });

    document.body.addEventListener('click', function () {
        plus(event, 'body is listening');
    });

    var element5 = 0;

    function plus(event, listener) {
        event.stopPropagation(); var hit = event.target;
        console.log(listener);

        // switch statement lets me evaluate one value ( hit.id ) against diff 
        // possibilities and runs code on match
        switch (hit.id) {
            case 'one-hundred':
                element5 += 100; break;
            case 'fifty':
                element5 += 50; break;
            case 'twenty':
                element5 += 20;
                break;
            case 'ten':
                element5 += 10;
                break;
            default:
                console.log('miss!');
                break;
        }

        console.log('current score: ', element5);
    }