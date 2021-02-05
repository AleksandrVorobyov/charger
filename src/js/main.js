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

const burgerbtn = document.getElementById('burger-btn');
const sidebar = document.getElementById('sidebar');

burgerbtn.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar--active');
})

const sidebarExit = document.getElementById('sidebar-exit');

sidebarExit.addEventListener('click', function() {
    sidebar.classList.remove('sidebar--active');
})