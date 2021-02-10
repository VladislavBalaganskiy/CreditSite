let options = {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        600: {
          perView: 1
        }
    }
};

new Glide('.glide', options).mount()