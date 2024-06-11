const hambuger = document.querySelector('.hamburger');
const navlink = document.querySelector('.right ul ');


hambuger.addEventListener('click' , () => {

      navlink.classList.toggle('mobile-menu');

});