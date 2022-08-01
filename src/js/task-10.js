const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes')
};

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = Number(refs.input.value);
  // console.log(amount);

  const boxesArr = [];
  let boxSize = 30;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    boxSize += 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    refs.boxes.style.display = `flex`;
    box.style.backgroundColor = getRandomHexColor();

    boxesArr.push(box);
  }

  refs.boxes.append(...boxesArr);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}