const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
};
// console.log(refs.input.value);
// console.log(refs.span);

refs.input.addEventListener('input', onFontSizeChange);

function onFontSizeChange() {
   refs.span.style.fontSize = `${refs.input.value}px`;
    // console.log(refs.input.value);
};

// console.log(onFontSizeChange());