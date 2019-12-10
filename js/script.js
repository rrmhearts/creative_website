/********************************
* Preloader
*********************************/
$(window).on("load", () => {
    $('#status').delay(350).fadeOut();
    $('#preloader').delay(350).fadeOut('slow');


    // Initialize and add the map
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});

    var infowindow = new google.maps.InfoWindow({
        content: "Uluru Place"
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    })
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
                items: 1,
                nav:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
            },
            480:{
                items: 2,
                nav: true,
                dots: false
            },
            1600:{
                items: 3,
                nav: false,
            }
        }
    });

/********************************
 * Owl Carousel Testimonials
 *******************************/
$('#testimonial-slider').owlCarousel({
    loop:false,
    autoplay: false,
    smartSpeed: 600,
    margin:0,
    autoplayHoverPause: true,
    responsiveClass:true,

    items:1,
    nav:true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        
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

/********************************
 * Navigation
 *******************************/
  
 $(() => {

    let showHideNav = () => {
        if ( $(window).scrollTop() > 90 ) { //620
            // Show white one
            $("nav").addClass("white-nav-top");
            //$(".navbar-brand img").attr("src","img/logo/logo-dark.png");

            // Show back to top button
            $("#back-to-top").fadeIn();
        } else {
            // Hide white one
            $("nav").removeClass("white-nav-top");
            //$(".navbar-brand img").attr("src","img/logo/logo.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();

        }
    }

    // On page load
    showHideNav();

    let showHideMenu = () => {
        $("#mobile-nav").fadeOut();

        $("#mobile-nav-open-btn").click((event) => {
            $("#mobile-nav").fadeIn();
        });

        $("#mobile-nav-close-btn").click((event) => {
            $("#mobile-nav").fadeOut();
        });

        $("#mobile-nav-content").click((event) => {
            $("#mobile-nav").fadeOut();
        })
    }

    showHideMenu();

    // On scroll
    $(window).scroll(() => {
        showHideNav();
    });

 });

// Smooth scrolling

$( () => {
    $("a.smooth-scroll").click(function(event) {
        // can't be arrow function because using this!
        event.preventDefault();

        // Get section id #about ...
        let section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo"); //easing plugin
    });
});