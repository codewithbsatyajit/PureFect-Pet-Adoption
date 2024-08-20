const navbar = document.querySelector("nav");
window.addEventListener("scroll", () =>
  navbar.classList.toggle("sticky", window.scrollY > 0)
);

const menu = document.querySelector(".menu");
const toggle = () => menu.classList.toggle("active");

document.querySelectorAll(".menu-btn").addEventListener("click", toggleMenu);
document.querySelectorAll(".close-btn").addEventListener("click", toggleMenu);

document
  .querySelector(".menu a")
  .forEach((link) => link.addEventListener("click", toggleMenu));
