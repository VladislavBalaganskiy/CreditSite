const creditSumSlider = document.getElementById('credit-sum');
const creditTimeSlider = document.getElementById('credit-time');
const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');
const input = [input0, input1];


noUiSlider.create(creditSumSlider, {
    start: [5000000],
    connect: [true, false],
    step: 10000,
    behaviour: 'snap',
    range: {
        'min': [300000],
        'max': [60000000]
    }
});

noUiSlider.create(creditTimeSlider, {
    start: [5],
    connect: [true, false],
    behaviour: 'snap',
    range: {
        'min': [1],
        'max': [30]
    }
});


function updateInput(input, value) {
    input.value = Math.round(value);
}

function updateSlider(slider, item) {
    let value = item.currentTarget.value;
    slider.noUiSlider.set(value);
}


creditSumSlider.noUiSlider.on("update", function(value){
    updateInput(input0, value);
});

creditTimeSlider.noUiSlider.on("update", function(value){
    updateInput(input1, value);
});


input0.addEventListener('change', (e) => {
    updateSlider(creditSumSlider, e);
});

input1.addEventListener('change', (e) => {
    updateSlider(creditTimeSlider, e);
});

