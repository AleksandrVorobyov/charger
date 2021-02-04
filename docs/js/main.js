if (window.screen.width < 720) {
    const serviceCards = document.querySelectorAll('.services__card');
    serviceCards.forEach( function(item) {
    item.addEventListener('click', function() {
        serviceCards.forEach( function(item) {
            item.querySelector('.services__card-after').style.opacity = '0';
            item.querySelector('.services__card-before-title').style.opacity = '1';
        })

        this.querySelector('.services__card-after').style.opacity = '1';
        this.querySelector('.services__card-before-title').style.opacity = '0';
        })
    })
}