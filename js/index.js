const logo = document.querySelector(".logo-heading");
const navCon = document.querySelector(".container nav-container");

//mouseover event
logo.addEventListener("mouseover", () => {
  logo.style.transform = "scale(1.3)";
  logo.style.transition = "all 0.4s";
  logo.style.cursor = "pointer";
});

logo.addEventListener("mouseleave", () => {
  logo.style.transform = "scale(1)";
});

//keydown event (B - 66)
navCon.addEventListener("keydown", function(e) {
  if (event.keyCode == 66) {
    navCon.style.background = "#FFEBCE";
  }
});
