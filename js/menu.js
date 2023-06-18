const openMenuButton = document.querySelector('.js-open-menu');
const closeMenuButton = document.querySelector('.js-close-menu');
const menuContainer = document.querySelector('.js-menu-container');

openMenuButton.addEventListener('click', function() {
    menuContainer.classList.add('active');
});

closeMenuButton.addEventListener('click', function() {
    menuContainer.classList.remove('active');
});

removeActiveClass();

window.addEventListener('resize', removeActiveClass);

function removeActiveClass() {
    if (window.innerWidth >= 768) {
        menuContainer.classList.remove('active');
    }
}