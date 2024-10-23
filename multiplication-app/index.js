const num1 = Math.ceil(Math.random()*10);

const num2 = Math.ceil(Math.random()*10);

document.querySelector('.question').innerText= `What is ${num1} multiply by ${num2}?`

const result = num1*num2;

let score = +localStorage.getItem('score');

if (!score){
  score = 0;  
}

document.querySelector('#score').innerText = `score: ${score}`;

document.querySelector('.btn').addEventListener('click',() => {
  const answer = +document.querySelector('#input').value;
  if (answer === result){
    score++;
  
    updateLocalStorage();
  } else {
    score--;
  
    updateLocalStorage();
  }
  
})

function updateLocalStorage(){
  localStorage.setItem('score', JSON.stringify(score))
}

