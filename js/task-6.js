const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes(); // Очищення перед створенням нових квадратів

  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);

  createBoxes(amount);
  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);
