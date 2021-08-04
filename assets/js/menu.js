"use strict"
//Меню-бургер на чистом JS
document.getElementById("menu-burger").onclick = function(){
  open()
};
function open(){
  document.getElementsByClassName("menu-burger")[0].classList.toggle("open-menu");
  document.getElementsByClassName("header-menu")[0].classList.toggle("open-menu");
  document.body.classList.toggle("menu-fixed");
}

document.getElementById("header-menu").onclick = function(){
  close()
};
function close(){
  if(document.getElementsByClassName("menu-burger open-menu")[0]&&document.getElementsByClassName("header-menu open-menu")[0]){
    document.getElementsByClassName("menu-burger open-menu")[0].classList.remove("open-menu");
    document.getElementsByClassName("header-menu open-menu")[0].classList.remove("open-menu");
    document.body.classList.toggle("fixed-page");
  }
}