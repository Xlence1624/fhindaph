document.querySelector(".fa-solid").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

document.querySelector(".fa-x").addEventListener("click", function () {
  document.querySelector(".mobile-nav").style.display = "none";
  document.querySelector(".fa-bars").style.display = "block";
  document.querySelector(".mobtop").style.display = "flex";
});
document.querySelector(".fa-bars").addEventListener("click", function () {
  document.querySelector(".mobile-nav").style.display = "flex";
  document.querySelector(".fa-bars").style.display = "none";
  document.querySelector(".mobtop").style.display = "none";
});
