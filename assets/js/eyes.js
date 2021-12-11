document
  .querySelector("body")
  .addEventListener("mousemove", function eyeball(params) {
    const eye = document.querySelectorAll(".eye");

    eye.forEach(function (eye) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let rad = Math.atan2(params.pageX - x, params.pageY - y);
      let rot = rad * (180 / Math.PI) * -1 + 0;
      eye.style.transform = "rotate(" + rot + "deg)";
    });
  });

document
  .querySelector(".profile-img")
  .addEventListener("mouseover", function () {
    document.querySelector(".profile-img").classList.add("hover");
  });
document
  .querySelector(".profile-img")
  .addEventListener("mouseout", function () {
    document.querySelector(".profile-img").classList.remove("hover");
  });
