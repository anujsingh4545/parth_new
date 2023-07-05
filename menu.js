// Getting hamburguer menu in small screens

const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

function menuToggle() {
  menu.classList.toggle("h-32");
}

// Browser resize listener
window.addEventListener("resize", menuResize);

// Resize menu if user changing the width with responsive menu opened
function menuResize() {
  // First get the size from the window
  const window_size = window.innerWidth || document.body.clientWidth;
  if (window_size > 640) {
    menu.classList.remove("h-32");
  }
}

function openMediaPlayer(url) {
  var thumbnailContainer = document.querySelector(".thumbnail-container");
  var mediaPlayer = document.querySelector(".media-player iframe");

  thumbnailContainer.style.display = "none";
  mediaPlayer.src = url;
  mediaPlayer.parentElement.style.display = "block";
}

var isUpIcon = false;
var isUpIcon1 = false;

function toggleVideo() {
  var section = document.getElementById("video");
  section.classList.toggle("video-closed");

  var svgIcon = document.getElementById("top");
  if (isUpIcon) {
    svgIcon.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" class="bi bi-caret-up-fill  text-xl sm:text-2xl mx-4 font-bold  text-gray-400  "   viewBox="0 0 16 16"> <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" /> </svg>';
  } else {
    svgIcon.innerHTML = '  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" class="bi bi-caret-down-fill  text-xl sm:text-2xl mx-4 font-bold  text-gray-400 " viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /></svg>';
  }

  isUpIcon = !isUpIcon;
}

function togglePhoto() {
  var section = document.getElementById("photo");
  section.classList.toggle("photo-closed");

  var svgIcon1 = document.getElementById("tops");
  if (isUpIcon1) {
    svgIcon1.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" class="bi bi-caret-up-fill  text-xl sm:text-2xl mx-4 font-bold  text-gray-400  "   viewBox="0 0 16 16"> <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" /> </svg>';
  } else {
    svgIcon1.innerHTML = '  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" class="bi bi-caret-down-fill  text-xl sm:text-2xl mx-4 font-bold  text-gray-400 " viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /></svg>';
  }

  isUpIcon1 = !isUpIcon1;
}
