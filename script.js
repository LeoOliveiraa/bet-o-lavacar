const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');

menuToggle.addEventListener('click', () => {
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none'; // Fecha o menu móvel
    } else {
        menuItems.style.display = 'block'; // Abre o menu móvel
    }
});