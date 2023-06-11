$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      $(".loader").remove();
    });
  }, 1000);
});
// toggle sidebar
let allLinks = document.querySelector(".flex-logins");
let toggleBtn = document.querySelector(".coll-icon");
let navLayer = document.querySelector(".nav-layer");
let linksMain = document.querySelectorAll(".user-ul li");
for (let i = 0; i < linksMain.length; i++) {
  linksMain[i].addEventListener("click", function () {
    toggleBtn.classList.toggle("active");
    navLayer.classList.toggle("slideto");
    allLinks.classList.toggle("slideto");
  });
}

if (allLinks) {
  toggleBtn.addEventListener("click", function () {
    navLayer.classList.toggle("slideto");
    allLinks.classList.toggle("slideto");
    this.classList.toggle("active");
  });
  navLayer.addEventListener("click", function () {
    toggleBtn.classList.remove("active");
    allLinks.classList.remove("slideto");
    this.classList.remove("slideto");
  });
}
