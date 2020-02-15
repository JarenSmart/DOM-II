const logo = document.querySelector(".logo-heading");
const byeBus = document.querySelector(".top-bus");

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

//wheel event
function drive(event) {
  event.preventDefault();
  scale += event.deltaY * 0.01;
  scale = Math.min(Math.max(0.125, scale), 3);
  byeBus.style.transform = `scale(${scale})`;
}
let scale = 1;
byeBus.addEventListener("wheel", drive);
