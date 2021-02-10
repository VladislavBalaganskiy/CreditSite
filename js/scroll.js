const scrollLink = document.querySelectorAll('[data-scroll]');


scrollLink.forEach( (item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        let currentLink = e.currentTarget;
        let scrollItemId = currentLink.getAttribute('data-scroll');
        let scrollItem = document.getElementById(scrollItemId);

        if(burgerMenu.classList.contains('show')) {
            burgerMenu.classList.remove('show');
            burgerBtn.classList.remove('show')
            body.classList.remove('no-scroll');
            open = false;
        }
        scrollItem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});