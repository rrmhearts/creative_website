/********************************
* Preloader
*********************************/
$(window).on("load", () => {
    $('#status').delay(350).fadeOut();
    $('#preloader').delay(350).fadeOut('slow');


    // Initialize and add the map
    // The location of Uluru
    let uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({position: uluru, map: map});

    let infowindow = new google.maps.InfoWindow({
        content: "Uluru Place"
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    // May not be needed, but keeps marker in center of screen.
    google.maps.event.addDomListener(window, 'resize', () => {
        //alert('Screen resized');
        let center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
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
        /* replicated here to apply css */
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
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
                nav: true,
                dots: false
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
  
 $( () => {

    /* Function is called twice below */
    let showHideNav = () => {
        if ( $(window).scrollTop() > 90 ) {

            // Show white one
            $("nav").addClass("white-nav-top");

            // Show back to top button
            $("#back-to-top").fadeIn();
        } else {

            // Hide white one
            $("nav").removeClass("white-nav-top");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    };

    // On page load
    showHideNav();

    // On scroll
    $(window).scroll(() => {
        showHideNav();
    });

    // For mobile nav open/close.
    $("#mobile-nav-open-btn").click((event) => {
        $("#mobile-nav").css("height", "100%");
    });

    $("#mobile-nav-close-btn, #mobile-nav a").click((event) => {
        $("#mobile-nav").css("height", "0%");
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

/**********************************
 * All the Animation
 **********************************/
$(() => {

    // Initialize AOS
    AOS.init();

    //const element =  document.querySelector('.my-element')
    //element.classList.add('animated', 'bounceOutLeft')

    $("#home-heading-1").addClass("animated fadeInDown");
})