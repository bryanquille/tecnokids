const body = document.querySelector("body");

window.addEventListener("load", (e) => {
  const headerHeight = document.querySelector(".header").clientHeight;
  body.setAttribute("style", `margin-top: ${headerHeight}px`);
});
