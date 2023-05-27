const kits = ['crash', 'kick', 'snare', 'tom'];

const containerEl = document.querySelector('.container');

kits.forEach( (kit) => {
  const btnEl = document.createElement('button');

  btnEl.classList.add('btn');

  btnEl.innerText = kit;

  btnEl.style.backgroundImage = 'url(images/' + kit + '.png)'
  //this one is so confusing
  //because the orginal format is: background-image: url('images/crash.png');
  // ahhh got it, that's the style of js, same as the below scale thing

  containerEl.appendChild(btnEl);

  const audioEL = document.createElement('audio');

  audioEL.src = 'sounds/' + kit + '.mp3';

  containerEl.appendChild(audioEL);

  btnEl.addEventListener('click', () => {
    audioEL.play();
  });

  window.addEventListener('keydown', (event) => {
    if(event.key === kit.slice(0,1)){
      audioEL.play();
      //slice(0,1) to get the first letter of string, but not capitailized 

      console.log(kit.slice(0,1));

      btnEl.style.transform = 'scale(.9)';

      setTimeout(() => {
        btnEl.style.transform = 'scale(1)';
      }, 500);
    }
  })

});