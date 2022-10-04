
$(document).ready(function () {


  $('.scroll').click(function () {
    $('html, body').animate({ scrollTop: $('.meals-body').offset().top }, 1000);
  });

  $(".js-feature-section").waypoint(function (direction) {

    if (direction == "down") {
      $("nav").addClass("sticky");
      $("nav").removeClass("container");
      $("nav").addClass("container-fluid");

    }
    else {
      $("nav").removeClass("sticky");
      $("nav").addClass("container");
    }

  }, {
    offset: '18%'
  });


  $(".js-feature-section").waypoint(function (direction) {

    $(".js-wp1").addClass("animate__animated animate__fadeIn")

  }, { offset: "18%" });

  $(".how-it-work-section").waypoint(function (direction) {

    $(".js-wp2").addClass("animate__animated animate__fadeInUp")

  }, { offset: "18%" });

  $(".cities-section").waypoint(function (direction) {

    $(".js-wp3").addClass("animate__animated animate__fadeIn")

  }, { offset: "18%" });


  $(".js-plans-section").waypoint(function (direction) {

    $(".js-wp4").addClass("animate__animated animate__pulse")

  }, { offset: "18%" });

  /*-----mobile nav------*/

  $(".js-mobile-nav-icon-on").click(function () {

    var nav = $(".js-main-nav");

    $(".js-mobile-nav-icon-on").hide()
    $(".js-mobile-nav-icon-off").show()


    nav.show()
  });

  $(".js-mobile-nav-icon-off").click(function () {

    var nav = $(".js-main-nav");

    $(".js-mobile-nav-icon-on").show()
    $(".js-mobile-nav-icon-off").hide()


    nav.hide()

  });


  $("h1").click(function() {

    $(this).hide();
  });
});