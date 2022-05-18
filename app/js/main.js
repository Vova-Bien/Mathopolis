$('.testimonials__inner').slick({
  dots: true,
  autoplay: true,
  speed: 2000,
});



const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
