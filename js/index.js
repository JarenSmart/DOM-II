const logo = document.querySelector(".logo-heading");

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
window.addEventListener("keydown", windowAlert, false);
function windowAlert(e) {
  if (e.keyCode == 66) {
    alert("Woah! Where are you going?");
  }
}
