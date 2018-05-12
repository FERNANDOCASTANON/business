$(document).ready(function() {
  "use strict"
    $('.slider').ripples({
      dropRadius: 13,
      perturbance: 0.01,
    });

    var typed = new Typed(".text", {
    strings: ["<strong>I Love</strong><strong class='primary'> Coding<strong>", "and share"],
    typespeed: 1,
    loop: true
});
});
