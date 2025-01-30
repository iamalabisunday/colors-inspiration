const hexaDecimalNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`];

// Arrays Section for Container Boxes
const colorBoxes = [
  document.querySelector(`#box-one`),
  document.querySelector(`#box-two`),
  document.querySelector(`#box-three`),
  document.querySelector(`#box-four`),
];
// Arrays Section for Text Element
const hexElements = [
  document.querySelector(`#hex-one`),
  document.querySelector(`#hex-two`),
  document.querySelector(`#hex-three`),
  document.querySelector(`#hex-four`),
];
// Buttons Section
const button = document.querySelector(`.button`);
const resetBtn = document.querySelector(`.resetbtn`);

// Function to generate a random hexadecimal color
const generateRandomNUmber = () => {
  let hexColorSign = `#`;
  for (let x = 0; x < 6; x++) {
    hexColorSign +=
      hexaDecimalNumberSystem[Math.floor(Math.random() * hexaDecimalNumberSystem.length)];
  }
  return hexColorSign;
};

// Event listener for the generate button
button.addEventListener(`click`, () => {
  hexElements.forEach((hexElement, index) => {
    const randomColor = generateRandomNUmber();
    hexElement.textContent = randomColor;
    colorBoxes[index].style.backgroundColor = randomColor;
  });
});

// Event listener for the reset button
resetBtn.addEventListener(`click`, () => {
  const defaulColors = [`#2B2B2B`, `#4B4B4B`, `#808080`, `#BABABA`];
  hexElements.forEach((hexElement, index) => {
    hexElement.textContent = defaulColors[index];
    colorBoxes[index].style.backgroundColor = defaulColors[index];
  });
});
