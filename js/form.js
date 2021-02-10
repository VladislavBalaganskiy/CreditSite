const formFirst = document.getElementById('form-1');
const formSecond = document.getElementById('form-2');
const formBtn = document.getElementById('form-btn');

formBtn.addEventListener("click", () => {
    formFirst.classList.remove('show');
    formSecond.classList.add('show');
});
