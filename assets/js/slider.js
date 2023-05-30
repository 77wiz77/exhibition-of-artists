'use strict';
const prev = document.getElementsByClassName('slider__btn-prev')[0],
  next = document.getElementsByClassName('slider__btn-next')[0],
  slides = document.querySelectorAll('.slider__slide'),
  dots = document.querySelectorAll('.slider__dot');

let index = 0;

const activeSlide = (n) => {
  for (let slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDot = (n) => {
  for (let dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
};

const prepareCurrentSlide = (ind) => {
  activeSlide(index);
  activeDot(index);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
// setInterval( nextSlide, 5000 );
