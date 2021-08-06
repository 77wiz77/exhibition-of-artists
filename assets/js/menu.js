"use strict"
document.getElementById("menu-burger").onclick = function(){
  open()
};
function open(){
  document.getElementsByClassName("menu-burger")[0].classList.toggle("open-menu");
  document.getElementsByClassName("menu__list")[0].classList.toggle("open-menu");
  document.body.classList.toggle("body_fixed");
}

document.getElementById("menu__list").onclick = function(){
  close()
};
function close(){
  if(document.getElementsByClassName("menu-burger open-menu")[0]&&document.getElementsByClassName("menu__list open-menu")[0]){
    document.getElementsByClassName("menu-burger open-menu")[0].classList.remove("open-menu");
    document.getElementsByClassName("menu__list open-menu")[0].classList.remove("open-menu");
    document.body.classList.toggle("body_fixed");
  }
}