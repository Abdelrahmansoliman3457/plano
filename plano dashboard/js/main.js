$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      $(".loader").remove();
    });
  }, 1000);
});

// Show And Hide SlideBar

const menu = document.getElementById("menu");
const sideBar = document.getElementById("sidebar");
const navbar = document.getElementById("navbar");
const main = document.getElementById("main");
const closeSidebar = document.getElementById("closeSidebar");
const mediaQuery  = window.matchMedia("(min-width: 767px)")

if (mediaQuery.matches) {
  $(".sidebar").hover(function () {
    sideBar.classList.remove("active-side");
    navbar.classList.remove("active-nav");
    main.classList.remove("active-main");
  });
}

if (menu) {
  menu.addEventListener("click", () => {
    sideBar.classList.toggle("active-side");
    navbar.classList.toggle("active-nav");
    main.classList.toggle("active-main");
  });
}

// Close SideBar
if (closeSidebar) {
  closeSidebar.addEventListener("click", () => {
    sideBar.classList.remove("active-side");
    navbar.classList.remove("active-nav");
    main.classList.remove("active-main");
  });
}

// toggle drop-down-search in header
let myBtndropSearch = document.querySelector(".search-go");
let dropSearch = document.querySelector(".my-drop-search");
let dropSearchForm = document.querySelector(".search-form");

if (dropSearch) {
  dropSearchForm.addEventListener("submit", function (e) {
    dropSearch.classList.toggle("show-drop");
    e.stopPropagation();
    e.preventDefault();
  });
  document.body.addEventListener("click", function () {
    dropSearch.classList.remove("show-drop");
  });
  dropSearch.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

$(".item-click").on("click", function () {
  $(".links > li > a").removeClass("active");
  $(".item-click").removeClass("active");
  $(this).addClass("active");

  if ($(this).next().hasClass("open")) {
    $(this).next().slideUp();
    $(this).next().removeClass("open");
  } else {
    $(".collapse-my").removeClass("open");
    $(".collapse-my").slideUp();
    $(this).next().addClass("open");
    $(this).next().slideDown();
  }
});

//  add active class to cuurent link
$(".links > li > a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});

$(".collapse-my a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
    $(this).closest(".collapse-my").prev().addClass("active");
    $(this).closest(".collapse-my").show();
  }
});

// Show And Hide Search Navbar
let searchIcon = document.querySelector(".search-mmain");
let searchBox = document.querySelector(".search-form");

if (searchIcon) {
  searchIcon.addEventListener("click", function () {
    searchBox.classList.toggle("active");

    if (this.firstElementChild.classList.contains("fa-magnifying-glass")) {
      this.firstElementChild.classList.replace(
        "fa-magnifying-glass",
        "fa-xmark"
      );
    } else {
      this.firstElementChild.classList.replace(
        "fa-xmark",
        "fa-magnifying-glass"
      );
    }
  });
}
