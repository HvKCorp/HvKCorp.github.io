function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    alert("Please rotate your device to landscape mode for a better experience.");
  }
}

window.addEventListener("resize", checkOrientation);
