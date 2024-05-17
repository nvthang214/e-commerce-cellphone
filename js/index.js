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
    interval: 4000,
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
// weekend hot sale animation
const textAnimation = document.getElementById("textAnimation");
let check = true;
setInterval(() => {
  if (check) {
    textAnimation.classList.add("hot__sale-animation");
    check = false;
  } else {
    textAnimation.classList.remove("hot__sale-animation");
    check = true;
  }
}, 500);

// stop event function
function stopPropagation(event) {
  event.stopPropagation();
}

// open close menu
function openMenu() {
  const menuArea = document.getElementById("menu-area");
  menuArea.style.display = "block";
  subArea.style.position = "fixed";
}
function closeMenu() {
  const menuArea = document.getElementById("menu-area");
  menuArea.style.display = "none";
  subArea.style.position = "absolute";
}
// sub area hover
const subArea = document.getElementById("menu-sub-area");

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    console.log(item.getAttribute("data-") == "phone");
    subArea.style.display = "block";
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("item-active");
    subArea.style.display = "none";
  });
});
document.querySelectorAll(".menu-sub-area").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.display = "block";
  });
});

document.querySelectorAll(".menu-sub-area").forEach((item) => {
  item.addEventListener("mouseleave", () => {
    item.style.display = "none";
  });
});
// open close contact
function openContact() {
  const contactArea = document.getElementById("contact-area");
  contactArea.classList.add("contact-center");
}
function closeContact() {
  const contactArea = document.getElementById("contact-area");
  contactArea.classList.remove("contact-center");
}
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.getElementById("wrapperTop").style.position = "fixed";
  } else {
    document.getElementById("wrapperTop").style.position = "static";
  }
});
