const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');

menuToggle.addEventListener('click', () => {
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none'; // Fecha o menu móvel
    } else {
        menuItems.style.display = 'block'; // Abre o menu móvel
    }
});

// Deixar o header com fundo preto 

let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        header.style.background = '#000000'
    } else {
        header.style.background = 'transparent'
    }
})