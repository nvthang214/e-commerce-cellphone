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
    textAnimation.classList.remove("hotsale__default");
    textAnimation.classList.add("hotsale__animation");
    check = false;
  } else {
    textAnimation.classList.remove("hotsale__animation");
    textAnimation.classList.add("hotsale__default");
    check = true;
  }
}, 1000);
