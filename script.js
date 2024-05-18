let burgerBtn = document.querySelector(".burger-menu");
burgerBtn.addEventListener('click', openCloseMenu);


function openCloseMenu(){
    let menuMobil = document.querySelector('.mobile-nav');
    menuMobil.classList.toggle('active');
}