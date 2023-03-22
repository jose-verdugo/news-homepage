const btn = document.querySelector(".Button-hamburger");
const nav = document.querySelector(".Header-nav--activo");

btn.addEventListener("click", () => {
  nav.classList.toggle("Header-nav--activo");
});
