const btnMenuMob = document.querySelector('#btn-menu-mob');
const line1 = document.querySelector('.line-menumob1');
const line2 = document.querySelector('.line-menumob2');
const menuMobile = document.querySelector('#menu-mobile');
const body = document.body;

btnMenuMob.addEventListener('click', () => {
    line1.classList.toggle('ativo1');
    line2.classList.toggle('ativo2');
    menuMobile.classList.toggle('abrir');
    body.classList.toggle('no-overflow'); 
});
