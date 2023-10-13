const searchBoxCloseBtn = document.querySelector('.searchBoxCloseBtn');
const searchBarMobile = document.querySelector('.searchBarMobile');
const searchBoxOpenBtn = document.querySelector('.searchBoxOpenBtn');
const mobileMenuToggler = document.querySelector('.mobileMenuToggler');
const mobile_menu= document.querySelector('.mobile_menu');
const closeMenuToggler= document.querySelector('.closeMenuToggler');
// open mobile search bar
searchBoxOpenBtn.addEventListener('click', (e) => {
    searchBarMobile.classList.add('active');
});

// close mobile search bar
searchBoxCloseBtn.addEventListener('click', (e) => {
    searchBarMobile.classList.remove('active');
});

// open mobile menu 
mobileMenuToggler.addEventListener('click', (e) => {
    mobile_menu.classList.add('active');
});

// close mobile menu
closeMenuToggler.addEventListener('click', (e) => {
    mobile_menu.classList.remove('active');
});