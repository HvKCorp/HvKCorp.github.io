function callback(){
  alert(window.orientation);
  if(window.innerHeight > window.innerWidth){
    alert("Rotate the device for best experience")
  }
}

window.addEventListener('orientationchange', callback, true);
