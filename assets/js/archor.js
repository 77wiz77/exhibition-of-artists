"use strict"
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault(); 

      let href = this.getAttribute('href').substring(1); 

      const scrollTarget = document.getElementById(href);

      const marginTop = 100; 
      const achorPosition = scrollTarget.getBoundingClientRect().top; 
      const finalTopPosition = achorPosition - marginTop;

      window.scrollBy({
          top: finalTopPosition,
          behavior: 'smooth'
      });
  });
});
