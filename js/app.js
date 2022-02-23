var input = document.getElementsByTagName('input');
var label = document.getElementsByTagName('label');

Array.from(input).forEach(function (element, index) {
    element.onfocus = function() {
        label[index].style.display = 'block';
    }
    element.onblur = function() {
        label[index].style.display = '';
    }
})

var btnShop = document.getElementById('btn-shop');
var menuMobile = document.querySelector('.menu-mobile');
var subMenuMobile = document.querySelector('.sub-menu-mobile');
var subMenu = document.querySelector('.sub-menu');
var btnShopRotate = document.getElementById('btn-shop-rotate');
var menuMobileIcon = document.getElementsByClassName('icon-change');
var isFalse = false;

btnShop.onclick = function() {
    isFalse = !isFalse;
    subMenu.style.display = (isFalse) ? 'grid' : 'none';
    btnShopRotate.style.transform = (isFalse) ? 'rotate(180deg)' : '';
}

menuMobile.onclick = function() {
    isFalse = !isFalse;
    subMenuMobile.style.display = (isFalse) ? 'block' : 'none';
    document.body.classList.toggle('fixed-position');

    menuMobileIcon[0].classList.toggle('rotate-45');
    menuMobileIcon[0].classList.toggle('translate-y-2');
    menuMobileIcon[1].classList.toggle('hidden');
    menuMobileIcon[2].classList.toggle('-rotate-45');
    menuMobileIcon[2].classList.toggle('-translate-y-2');
}
