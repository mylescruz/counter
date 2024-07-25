let count = 0;
let counter = document.getElementById('count');

let decrease = document.getElementById('decrease').addEventListener('click', () => {
    count--;
    countColor();
    counter.textContent = count;
});

let increase = document.getElementById('increase').addEventListener('click', () => {
    count++;
    countColor();
    counter.textContent = count;
});
let reset = document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    countColor();
    counter.textContent = 0;
});

let countColor = function() {
    if (count > 0) {
        counter.style.color = 'green';
    } else if (count < 0) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'white';
    }
}