const refs = {
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color')
};

refs.btn.addEventListener("click", getNewBg);

function getNewBg() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}