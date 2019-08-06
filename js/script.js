/* How to use JQuery */
// $(selector).action();



// Make function available after document is ready.
// executes before window on load
$(document).ready(() => {

    // Select ID
    $('#main').css({
        color: 'red',
        fontSize: 25
    });

    // On click event handler
    $('h1').click(() => {
        $('.content').css({
            color: 'blue',
            fontSize: 50
        });
    });
});

// Everything fully loaded including images / content
$(window).on("load", () => {
// including graphics
    //alert("Window is loaded!");
});