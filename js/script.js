$(document).ready(function () {



  //owl carousel ===================================================
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });



});

let $navbar_menu_toggler = document.querySelector(".button_menu"),
  $navbar_menu_collapse = document.querySelector(".menu_1"),
  $navbar_button_line = document.querySelectorAll(".button_menu span");

$navbar_menu_toggler.onclick = menu_mobile_toggler;

function menu_mobile_toggler(event) {
  $navbar_menu_collapse.classList.toggle("hidden_menu_1");
  $navbar_menu_toggler.classList.toggle("position_menu_button");
  $navbar_button_line[0].classList.toggle("navbar_line_active_1");
  $navbar_button_line[2].classList.toggle("navbar_line_active_2");
  $navbar_button_line[1].classList.toggle("navbar_line_active_3");
};