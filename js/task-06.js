const refs = {
    input: document.getElementById('validation-input'),
    dataInput: document.querySelector('input[data-length="6"]')
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const dataLengthInput = refs.dataInput.dataset.length;
    
    if (event.currentTarget.value.length === parseInt(dataLengthInput)) {
        event.currentTarget.classList.add("valid")
        event.currentTarget.classList.remove("invalid")
    } else {
        event.currentTarget.classList.add("invalid")
        event.currentTarget.classList.remove("valid")
    }
}