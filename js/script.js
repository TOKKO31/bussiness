// JavaScript to toggle the menu and make it fixed
var toggleButton = document.querySelector(".toggle-menu");
var navBar = document.querySelector(".nav-bar");
var closeButton = document.querySelector(".close-menu");

// function to toggle the menu when the button is clicked
function toggleMenu() {
  if (navBar.classList.contains("fixed")) {
    navBar.classList.remove("fixed");
  } else {
    navBar.classList.add("fixed");
  }
  navBar.classList.toggle("toggle");
}

// Event listener for the toggle button
toggleButton.addEventListener("click", toggleMenu);

//Event listener for the close button
closeButton.addEventListener("click", function () {
  navBar.classList.remove("fixed");
  navBar.classList.remove("toggle");
});
