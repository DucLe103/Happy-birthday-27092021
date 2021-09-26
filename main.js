var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var audio = $('#audio');
var btn = $('.button');
var fireWork = $('.pyro');
var cele = $('.cele');
var slides = $$('.slide');
var length = slides.length;
var currentIndex = 1;

btn.onclick = function () {
    fireWork.classList.add('active');
    audio.play();
    setTimeout( () => {
        cele.classList.add('active')
    },2000)
    setTimeout( () => {
        cele.classList.remove('active')
        setInterval(() => {
            slides[currentIndex-1].classList.remove('active');
            slides[currentIndex].classList.add('active');
            currentIndex++;
        }, 6000);
    },13000)
    }




   



