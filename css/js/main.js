$(document).ready(function() {
  "use strict"
    $('.slider').ripples({
      dropRadius: 13,
      perturbance: 0.01,
    });

    var typed = new Typed(".text", {
    strings: ["<strong>I Love</strong><strong class='primary'> Coding<strong>", "<strong>I Love Making</strong><strong class='primary'> Business Plans<strong>"],
    typespeed: 2,
    loop: true
    });

    $(window).scroll(function() {
      var top = $(window).scrollTop();
      if (top >= 60) {
        $('nav').addClass('secondary');
      } else if ($('nav').hasClass('secondary')) {
        $('nav').removeClass('secondary');
      }
    });
});
