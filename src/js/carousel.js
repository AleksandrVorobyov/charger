$(document).ready(function(){
    $(".header__carousel").owlCarousel({
        items: 1,
        nav: true,
        navText : ["prev","next"],
        dots: false,
        mouseDrag: false,
        smartSpeed: 3000
    });
});

$('.header__carousel').on('changed.owl.carousel', function(event) {
    var headerDotsNow = document.getElementById('header-dots-now');
    headerDotsNow.textContent = '0'+ (event.item.index + 1);  
});

const headerDotsNow = document.getElementById('header-dots-now');
const headerDotsAll = document.getElementById('header-dots-all');
const headerCarouselItems = document.querySelectorAll('.header__carousel-item');
const headerCarousel = document.querySelector('.header__carousel');

if ( headerCarouselItems.length < 10 ) {
    headerDotsAll.textContent = '0' + headerCarouselItems.length;
} else {
    headerDotsAll.textContent = headerCarouselItems.length
}
