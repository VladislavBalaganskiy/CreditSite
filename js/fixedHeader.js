const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    scroll = window.scrollY
    if (scroll > 0) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
});