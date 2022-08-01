const inputRef = document.querySelector('#validation-input');
const inputCorrectLength = parseInt(inputRef.getAttribute('data-length'));

inputRef.addEventListener('input', onInputBlur);

function onInputBlur() {
    if (inputRef.value.length === inputCorrectLength) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else if (inputRef.value.length === 0) {
        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
    }
};