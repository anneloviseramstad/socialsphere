const menuToggler = document.getElementById("menuToggler");
const mobileMenu = document.getElementById("mobileMenu");
const closeButton = document.getElementById("close-button");

menuToggler.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
