const hourEl = document.getElementById('hours');

const minuteEl = document.getElementById('minutes');

const secondEl = document.getElementById('seconds');

const ampmEl = document.getElementById('ampm');

function updateClocks(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = 'AM';

  if (h>12){
    h = h - 12;
    ampm = 'PM';
  }

  // ternary operator
  h < 10 ? '0' + h : h;
  m < 10 ? '0' + m : m;
  s < 10 ? '0' + s : s;
  
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClocks();
  }, 1000);

}

updateClocks();