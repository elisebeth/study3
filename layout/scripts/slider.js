let main_content = document.querySelector(".header__main-content");
let button_box = document.querySelector(".header__bottom-buttons");

let menu_btn = document.querySelector(".menu__btn");

menu_btn.addEventListener("click", () => {
  main_content.classList.toggle("hidden");
  button_box.classList.toggle("hidden");
});
