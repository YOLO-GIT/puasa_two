let bg = document.getElementById("bg");
let text = document.getElementById("text");
let leaves_right = document.getElementById("leaves_right");
let leaves_left = document.getElementById("leaves_left");
let others = document.getElementById("others");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // Adjust the parallax effect for each image
  text.style.marginTop = value * 0.7 + "px"; // Adjust the multiplier as needed
  leaves_left.style.left = value * -0.7 + "px"; // Adjust the multiplier as needed=
  leaves_right.style.left = value * 0.7 + "px"; // Adjust the multiplier as needed
});
