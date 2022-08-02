const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes')
};

refs.destroyBtn.addEventListener('click', destroyBoxes);
refs.createBtn.addEventListener('click', () => {
  const amount = parseInt(refs.input.value);
  amount >= 1 && amount <= 100
    ? createBoxes(amount)
    : alert('Please enter a number from 1 to 100 inclusive!')
});

function createBoxes(amount) {
  const boxesArr = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    refs.boxes.style.display = `flex`;
    box.style.marginRight = `5px`;
    box.style.border = `1px solid black`;
    box.style.borderRadius = `5px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesArr.push(box);
  }

  refs.boxes.append(...boxesArr);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}