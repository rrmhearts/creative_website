/********************************
* Preloader
*********************************/
$(window).on("load", () => {
    $('#status').delay(350).fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

// Document load
$( () => { 
/********************************
 * Owl Carousel
 *******************************/
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

/********************************
 * Responsive Tabs
 *******************************/
    $('#services-tabs').responsiveTabs({
        startCollapsed: 'accordion',
        animation: 'slide'
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
        this.Waypoint.destroyAll();
    },
    {
        offset: 'bottom-in-view'
    });


    $('#about-bottom').waypoint(() => {
        $.notify.addStyle('notify-style', {
            html: "<div><span data-notify-text/></div>",
            classes: {
              base: {
                "white-space": "nowrap",
                "background-color": "#4acaa8",
                "color": "#fff",
                "padding": "10px",
                "margin": "-140px 0px 0 0px",
                //"border-radius": "20px",
                "box-shadow": "0 0 15px rgba(0, 0, 0, .45)"
              },
            }
          });
          $('#about-bottom').trigger('notify-hide');
          $('#about-bottom').notify('Cute baby!', {
              style: 'notify-style',
              direction: 'right'
          });

    });
/**********************************
 * Magnific Popup plugin
 **********************************/
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

  }); // end

  $(window).on('load', () => {
/********************************
 * Isotope Tabs
 *******************************/
    // init Isotope
    var $grid = $('.isotope-container').isotope({
        // options
    });

    // filter items on button click
    $('#isotope-filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        // active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
  });