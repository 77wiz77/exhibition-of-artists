"use strict"
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault(); 

      let href = this.getAttribute('href').substring(1); 

      const scrollTarget = document.getElementById(href); //найти якорь

      const topOffset = 100; //вычислить высоту фиксированного элемента
      // const topOffset = 0; // оступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top; //высота до нужного якоря
      const offsetPosition = elementPosition - topOffset; //От общей высоты документа отнимем высоту навигации и получим необходимое смещение в пикселях по оси Y.

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
