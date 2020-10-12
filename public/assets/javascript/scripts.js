// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $( ".menu" ).click(function() {
       $(".side-menu").css("width", "655px");
    });

    $( ".close-menu" ).click(function() {
        $(".side-menu").css("width", "0px");
    });

});

