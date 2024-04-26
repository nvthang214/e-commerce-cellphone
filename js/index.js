document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide1", {
    perPage: 5,
    type: "loop",
    perMove: 1,
    wheel: true,
    autoplay: true,
    breakpoints: {
      1320: {
        perPage: 4,
      },
      1058: {
        perPage: 3,
      },
      796: {
        perPage: 2,
      },
      534: {
        perPage: 1,
      },
    },
  });
  splide.mount();
});
