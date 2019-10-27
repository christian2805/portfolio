document.addEventListener("DOMContentLoaded", start);

function start() {}
const videos = document.querySelectorAll(".videoz");
document.getElementById("burger").addEventListener("click", openSidebar);
const coll = document.getElementsByClassName("readMore");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function openSidebar() {
  if (!(burgermenu.style.display == "block")) {
    burgermenu.style.display = "block";
    burgermenu.classList.remove("menu_tilbage");
    burgermenu.classList.add("menu_frem");
  } else {
    burgermenu.classList.remove("menu_frem");
    burgermenu.classList.add("menu_tilbage");
    setTimeout(function() {
      burgermenu.style.display = "none";
    }, 500);
  }
}
videos.forEach(video => {
  video.addEventListener("mouseover", function() {
    this.play();
  });
  video.addEventListener("mouseout", function() {
    this.pause();
  });
  video.addEventListener("touchstart", function() {
    this.play();
  });
  video.addEventListener("touchend", function() {
    this.play();
  });
});
