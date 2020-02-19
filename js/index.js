const logo = document.querySelector(".logo-heading");
const byeBus = document.querySelector(".top-bus");
const dblContent = document.querySelectorAll("p");

//mouseover event
logo.addEventListener("mouseover", () => {
  logo.style.transform = "scale(1.3)";
  logo.style.transition = "all 0.4s";
  logo.style.cursor = "pointer";
  logo.style.color = "#B0D1DD";
});

logo.addEventListener("mouseleave", () => {
  logo.style.transform = "scale(1)";
  logo.style.color = "black";
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

//drag-drop event
// function dragText(event) {
//     document.addEventListener("drag", function(event))
// }

//resize event
function windowSize() {
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;
  document.getElementsByClassName(".content-section .text-content").innerHTML =
    "Width: " + w + ", " + "Height: " + h;
}

window.addEventListener("resize", () => {
  console.log("resize initiated");
});

//dblclick event
dblContent.forEach(sect => {
  sect.addEventListener("dblclick", () => {
    if (sect.style.backgroundColor === "#FFEACD") {
      sect.style.backgroundColor = "#16A2B8";
    } else {
      sect.style.backgroundColor = "#FFEACD";
    }
  });
});

//preventDefault event
document.querySelectorAll(".nav-link").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
  });
});
