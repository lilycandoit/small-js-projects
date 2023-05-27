const containerEl = document.querySelector('.container');

for (let i = 0; i <30; i++){
  const colorContainerEl = document.createElement('div');

  colorContainerEl.classList.add('color-container');

  containerEl.appendChild(colorContainerEl); // to add colors box into the web. 
}

const colorContainerEls = document.querySelectorAll('.color-container');

console.log(typeof colorContainerEls)

generateColors();

function generateColors(){
  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();

    colorContainerEl.style.backgroundColor = '#' + newColorCode;

    colorContainerEl.innerText = '#' + newColorCode;
  });
}

function randomColor(){
  const chars = "0123456789abcdef";

  const colorCodeLength = 6;

  let colorCode = "";

  for (let i = 0; i < colorCodeLength; i++){
    const randomNum = Math.floor(Math.random() * chars.length);

    colorCode += chars.substring(randomNum, randomNum + 1);

    // console.log(colorCode, randomNum);
  }

  return colorCode; // to return the last colorCode with 6 characters

}

// DONE!