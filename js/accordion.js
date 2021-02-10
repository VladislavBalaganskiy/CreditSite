const accordionBtn = document.querySelectorAll('.accordion__item ');
const accordionContent = document.querySelectorAll('.accordion__content ');


accordionBtn.forEach( item => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let contentId = currentBtn.getAttribute('data-accordion');
        let currentContent = document.getElementById(contentId);

        if (!currentContent.classList.contains('show')) {
            accordionBtn.forEach( (item) => {
                item.classList.remove('show')
            });

            accordionContent.forEach( (item) => {
                item.classList.remove('show')
            });
            
            currentBtn.classList.add('show');
            currentContent.classList.add('show');
            
        } else {
            currentBtn.classList.remove('show');
            currentContent.classList.remove('show');
        }
    });
});

