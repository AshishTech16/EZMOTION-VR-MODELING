let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex].classList.add('active');
  setTimeout(nextSlide, 4000);
}
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
}
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}
showSlides();

const aboutSection = document.querySelector('.section-1');
const teamSection = document.querySelector('.section-2');
const contactSection = document.querySelector('.section-3');

const aboutLink = document.querySelector('.nav-list li:nth-child(1)');
const teamLink = document.querySelector('.nav-list li:nth-child(2)');
const contactLink = document.querySelector('.nav-list li:nth-child(3)');

aboutLink.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

teamLink.addEventListener('click', () => {
  teamSection.scrollIntoView({ behavior: 'smooth' });
});

contactLink.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
    document.getElementById("scroll-to-top-btn").style.display = "block";
  } else {
    document.getElementById("scroll-to-top-btn").style.display = "none";
  }
}

document.getElementById("scroll-to-top-btn").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


