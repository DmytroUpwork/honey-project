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

// меню выпадающее ==============================
let $navbar_menu_toggler = document.querySelector(".button_menu"),
  $main_transform_collapse = document.querySelector("main"),
  $nav_transform_collapse = document.querySelector("nav"),
  $footer_transform_collapse = document.querySelector("footer"),
  $navbar_menu_collapse = document.querySelector(".menu_1"),
  $navbar_menu_mobile_toggler = document.querySelector(".navbar-toggler"),
  $navbar_button_menu_mobile_line = document.querySelectorAll(
    ".navbar-toggler span"
  ),
  $navbar_link_menu = document.querySelectorAll("a.link_transform_menu"),
  $navbar_button_line = document.querySelectorAll(".button_menu span");

$navbar_menu_mobile_toggler.onclick = navbar_button_menu_mobile_line;

$navbar_menu_toggler.addEventListener("click", function (event) {
  event.preventDefault();
  $navbar_link_menu.forEach((el) => {
    el.classList.toggle("link_transform");
  });
  $navbar_menu_collapse.classList.toggle("hidden_menu_1");
  $navbar_menu_toggler.classList.toggle("position_menu_button");
  $navbar_button_line[0].classList.toggle("navbar_line_active_1");
  $navbar_button_line[2].classList.toggle("navbar_line_active_2");
  $navbar_button_line[1].classList.toggle("navbar_line_active_3");
  $main_transform_collapse.classList.toggle("main_transform");
  $nav_transform_collapse.classList.toggle("main_transform");
  $footer_transform_collapse.classList.toggle("main_transform");
});

function navbar_button_menu_mobile_line(event) {
  $navbar_button_menu_mobile_line[0].classList.toggle(
    "navbar_line_mobile_active_1"
  );
  $navbar_button_menu_mobile_line[2].classList.toggle(
    "navbar_line_mobile_active_2"
  );
  $navbar_button_menu_mobile_line[1].classList.toggle(
    "navbar_line_mobile_active_3"
  );
}

// пагинация страниц ==========================
window.onload = function () {
  var paginationPage = parseInt($(".cdp").attr("actpage"), 10);
  $(".cdp_i").on("click", function () {
    var go = $(this).attr("href").replace("#!", "");
    if (go === "+1") {
      paginationPage++;
    } else if (go === "-1") {
      paginationPage--;
    } else {
      paginationPage = parseInt(go, 10);
    }
    $(".cdp").attr("actpage", paginationPage);
  });

  let $navbar_link_menu = document.querySelectorAll("a.link_transform_menu");
  for (var i = 0; $navbar_link_menu.length; i++) {
    if (window.location == $navbar_link_menu[i].href)
      $navbar_link_menu[i].classList.add("active_link");
  }
};
