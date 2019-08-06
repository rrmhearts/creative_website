/* How to use JQuery */
// $(selector).action();



// Make function available after document is ready.
// executes before window on load
$(document).ready(() => {
// OR $(() => { })
    $('h1').hide(2000); 

    $('h1').show(2000);

    //$('h1').slideup(1000).slidedown(1000);

    // Select ID
    $('#main').css({
        color: 'red',
        fontSize: 25
    });

    // Select by class
    /* $('.content').css({
        color: 'blue',
        fontSize: 50
    });*/

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