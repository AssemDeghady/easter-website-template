$(document).ready(function(){
  //  ============== Wow Plugin =============== //
  new WOW().init();
  //  ============== Wow Plugin: END =============== //

  //  ============== PrettyPhoto Plugin =============== //
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });
  //  ============== PrettyPhoto Plugin: END =============== //
      
  //  ============== Styleswitcher =============== //  
  $("#style-switcher > h2 a").click(function(e){
    e.preventDefault();
    $("#style-switcher").toggleClass('open');
  });
  //  ============== Styleswitcher: END =============== //

  //  ============== Header =============== //
  $('#navbar-menu > ul').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {},
    end: function() {},
    scrollChange: function($currentListItem) {}
  });   
  // ============== Header: END =============== //

  //  ============== Hero Carousel =============== //
  var swiper = new Swiper('.hero-carousel .swiper-container', {
    autoplay: 3000,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'      
  });

  $(".hero-carousel .swiper-container").hover(function(){
    swiper.stopAutoplay();
  }, function(){
    swiper.startAutoplay();
  });     
  //  ============== Hero Carousel: END =============== // 

  //  ============== Testimonials =============== //
  var swiper = new Swiper('.testimonials .swiper-container', {
    pagination: '.testimonials .swiper-pagination',
    autoplay: 3000,
    paginationClickable: true
  });

  $(".testimonials .swiper-container").hover(function(){
    swiper.stopAutoplay();
  }, function(){
    swiper.startAutoplay();
  });    
  //  ============== Testimonials: END =============== //

  //  ============== Contact Us =============== //
  var map = new GMaps({
    el: '#map',
    lat: 40.730610,
    lng:  -73.935242,
    zoom: 13      
  });

  map.addMarker({
    lat: 40.730610,
    lng:  -73.935242,
    click: function(e) {
      map.setCenter(e.position.lat(), e.position.lng());
      map.setZoom(13);
    },      
    infoWindow: {
      content: '<div class="marker-info-window"><h4>Contact Personnel</h4><p>Location Address</p></div>'
    }
  });
  // ============== Contact Us: END =============== //

});