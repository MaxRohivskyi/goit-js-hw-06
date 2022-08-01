const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output')
};

refs.nameInput.addEventListener('input', onInputChange);

// console.log(refs.nameInput);
// console.log(refs.nameOutput);

function onInputChange(event) {
    refs.nameInput.value === ''
        ? refs.nameOutput.textContent = 'Anonymous'
        : refs.nameOutput.textContent = event.currentTarget.value
};