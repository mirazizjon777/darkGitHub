const darkNot = document.getElementById("darkNot");
const wrapper = document.querySelector(".wrapper");
const darkText = document.querySelector(".dark-text");

let b = false;
darkNot.addEventListener("click", () => {
    b++
  if (b == true) {
    wrapper.classList.toggle("dark-not");
    darkText.textContent = "LIGHT";
    darkNot.src = "./images/svg/sun.svg";
  } else {
    wrapper.classList.toggle("dark-not");
    darkText.textContent = "DARK";
    darkNot.src = "./images/svg/oy.svg";
    b = false
  }
});
