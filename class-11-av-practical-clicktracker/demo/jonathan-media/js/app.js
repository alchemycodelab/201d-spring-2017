var headerEle = document.querySelector( 'h1' );
headerEle.addEventListener( 'click', videoHandler );

function videoHandler ( event ) {
    var video = document.querySelector( 'video' );
    video.play()
}