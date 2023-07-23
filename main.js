var menu = document.getElementById('menubar');
var dehaze = document.getElementById('menubtn');
var dstate = false;

var oldScrollY = window.scrollY;

var directionText = document.getElementById('direction');
 window.onscroll = function(e) {
  if(oldScrollY < window.scrollY){
     menu.style.transform = "translateX(-200px)";
     menu.style.width = "50px";
     dehaze.innerHTML = "dehaze";
     dstate = false;
       } else {
     menu.style.transform = "translateX(0px)";
     menu.style.width = "50px";
     dehaze.innerHTML = "dehaze";
     dstate = false;
       }
     oldScrollY = window.scrollY;
}

menubtn.addEventListener('click', (e) => {
  
  if(dstate){
    menu.style.width = "50px";
    dehaze.innerHTML = "dehaze";
    dstate = false;
  }else{
    menu.style.width = "180px";
    dehaze.innerHTML = "close";
    dstate = true;
  }
  
});