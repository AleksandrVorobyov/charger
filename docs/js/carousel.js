$(document).ready(function(){
    $(".header__carousel").owlCarousel({
        margin: 10,
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

$(document).ready(function(){
    $(".projects__carousel-first").owlCarousel({
        margin: 50,
        nav: false,
        dots: false,
        smartSpeed: 60000,
        loop: true,
        autoplay: true,
        autoPlaySpeed: 60000,
        autoPlayTimeout: 60000,
        autoplayHoverPause: true,
        lazyLoad:true,
        autoWidth: true,
    });
});

$(document).ready(function(){
    $(".projects__carousel-second").owlCarousel({
        margin: 50,
        nav: false,
        dots: false,
        smartSpeed: 60000,
        loop: true,
        autoplay: true,
        autoPlaySpeed: 60000,
        autoPlayTimeout: 60000,
        autoplayHoverPause: true,
        lazyLoad:true,
        autoWidth: true,
        rtl:true,
    });
});

$(document).ready(function(){
    $(".quote__carousel").owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        mouseDrag: false,
        smartSpeed: 3000,
        loop: true
    });
});

var owlQuote = $('.quote__carousel');

$('.quote__nav-btn-right').click(function() {
    owlQuote.trigger('next.owl.carousel');
})

$('.quote__nav-btn-left').click(function() {
    owlQuote.trigger('prev.owl.carousel');
})