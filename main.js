var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img')

menuBar .addEventListener('click',function(){
    alert("Olá Mundo")
    menu.classList.toggle('active')
    if (iconMenu.getAttribute("src") == 'imagens/menu.png') {
        iconMenu.getAttribute("src","imagens/close.png")
    }
    menu.classList.toggle('active');
});