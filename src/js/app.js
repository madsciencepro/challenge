// Fade Cards in on page load.

var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
  setInterval(show, 100);
}

function show() {
  var body = document.getElementById('cards');
  opacity = Number(window.getComputedStyle(cards).getPropertyValue('opacity'));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
