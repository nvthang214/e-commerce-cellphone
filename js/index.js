document.addEventListener("DOMContentLoaded", autoloop("#hotsale"));
document.addEventListener("DOMContentLoaded", autoloop("#phone"));
document.addEventListener("DOMContentLoaded", autoloop("#laptop"));
document.addEventListener("DOMContentLoaded", autoloop("#pc"));
document.addEventListener("DOMContentLoaded", autoloop("#tablet"));
document.addEventListener("DOMContentLoaded", autoloop("#sound"));
document.addEventListener("DOMContentLoaded", autoloop("#watch"));
document.addEventListener("DOMContentLoaded", autoloop("#houseware"));
document.addEventListener("DOMContentLoaded", autoloop("#tv"));
function autoloop(a) {
  var splide = new Splide(a, {
    perPage: 5,
    type: "loop",
    perMove: 1,
    interval: 2000,
    autoplay: true,
    breakpoints: {
      425: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1024: {
        perPage: 5,
      },
    },
  });
  splide.mount();
}

const textAnimation = document.getElementById("textAnimation");
let check = true;
setInterval(() => {
  if (check) {
    textAnimation.classList.remove("hot__sale-default");
    textAnimation.classList.add("hot__sale-animation");
    check = false;
  } else {
    textAnimation.classList.remove("hot__sale-animation");
    textAnimation.classList.add("hot__sale-default");
    check = true;
  }
}, 200);

function openContact() {
  const contactArea = document.getElementById("contact-area");
  contactArea.classList.add("contact-center");
}
function closeContact() {
  const contactArea = document.getElementById("contact-area");
  contactArea.classList.remove("contact-center");
}
function stopPropagation(event) {
  event.stopPropagation();
}
function openMenu() {
  const menuArea = document.getElementById("menu-area");
  menuArea.style.display = "block";
}
function closeMenu() {
  const menuArea = document.getElementById("menu-area");
  menuArea.style.display = "none";
}
