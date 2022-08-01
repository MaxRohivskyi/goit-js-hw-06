const refs = {
    counterValueBtn: document.querySelector('#value'),
    addListenerBtn: document.querySelector('[data-action="increment"]'),
    removeListenerBtn: document.querySelector('[data-action="decrement"]')
};

refs.addListenerBtn.addEventListener('click', increment);
refs.removeListenerBtn.addEventListener('click', decrement);

let counterValue = 0;

function increment () {
    counterValue += 1;

    refs.counterValueBtn.textContent = counterValue;
};

function decrement () {
    counterValue -= 1;

    refs.counterValueBtn.textContent = counterValue;
};
