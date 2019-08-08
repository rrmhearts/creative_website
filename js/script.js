/********************************
* Preloader
*********************************/
$(window).on("load", () => {
    $('#status').delay(350).fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/********************************
 * Owl Carousel
 *******************************/
//$(document).ready(function(){
$( () => {
    $('#team-members').owlCarousel({
        loop:true,
        autoplay: true,
        smartSpeed: 600,
        margin:0,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
            },
            600:{
                items:3,
                nav:false
            },
            990:{
                items:2,
                nav:false,
            },
            1600:{
                items:3,
                nav:false,
            }
        }
    });
  });

  /******************************************
   * Progress Bars
   *****************************************/
  $( () => {

    $('#progress-elements').waypoint(() => {
        $('.progress-bar').each( (i, obj) => {
            let newWidth = ($(obj).attr('aria-valuenow') + '%');
            $(obj).animate({
                'width': newWidth
            }, 1500);
        });
        this.destroy();
    },
    {
        offset: 'bottom-in-view'
    });
  });
