document.addEventListener("DOMContentLoaded", start);

function start() {}
const videos = document.querySelectorAll("video");
document.getElementById("burger").addEventListener("click", openSidebar);

function openSidebar() {
  if (!(burgermenu.style.display == "block")) {
    burgermenu.style.display = "block";
  } else {
    burgermenu.style.display = "none";
  }
}
videos.forEach(video => {
  video.addEventListener("mouseover", function() {
    console.log("play");
    this.play();
  });
  video.addEventListener("mouseout", function() {
    console.log("pause");
    this.pause();
  });
  video.addEventListener("touchstart", function() {
    console.log("touchplay");
    this.play();
  });
  video.addEventListener("touchend", function() {
    console.log("touchpause");
    this.play();
  });
});
