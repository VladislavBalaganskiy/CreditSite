const burgerMenu = document.getElementById('burger-menu');
const burgerBtn = document.getElementById('burger-btn');
let open = false;
const body = document.getElementById('body');


burgerBtn.addEventListener('click', () => {
    if (!open) {
        burgerMenu.classList.add('show');
        burgerBtn.classList.add('show');
        body.classList.add('no-scroll');
        open = true;
    } else {
        burgerMenu.classList.remove('show');
        burgerBtn.classList.remove('show')
        body.classList.remove('no-scroll');
        open = false;
    }
});