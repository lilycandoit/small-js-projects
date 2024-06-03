const projects = [
  {
    name: 'AutoText-Affect-Animation',
    image: '/main-images/auto-text.png',
    site: '',
    code: '',
  },
  {
    name: 'Background-Image-Scroll-Effect',
    image: '/main-images/background-scrolling.png',
    site: '',
    code: '',
  },
  {
    name: 'blurred-background',
    image: '/main-images/blurred-background-popup.png',
    site: '',
    code: '',
  },
  {
    name: 'digital-clock',
    image: '/main-images/digital-clock.png',
    site: '',
    code: '',
  },
  {
    name: 'Drum-kits',
    image: '/main-images/Drum-kits.png',
    site: '',
    code: '',
  },
  {
    name: 'multiplication-app',
    image: '/main-images/multiplication-app.png',
    site: '',
    code: '',
  },
  {
    name: 'Random-color-generator',
    image: '/main-images/Random-color-generator.png',
    site: '',
    code: '',
  },
  {
    name: 'Random-pictures',
    image: '/main-images/Random-pictures.png',
    site: '',
    code: '',
  },
  {
    name: 'Realtime-charactor-counter',
    image: '/main-images/Realtime-charactor-counter.png',
    site: '',
    code: '',
  },
  {
    name: 'video-trailer-popup',
    image: '/main-images/video-trailer-popup.png',
    site: '',
    code: '',
  },
  {
    name: 'Heart-trail-animation',
    image: '/main-images/Heart-trail-animation.png',
    site: '',
    code: '',
  },
  {
    name: 'Image-Search-App',
    image: '/main-images/Image-Search-App.png',
    site: '',
    code: '',
  },
  {
    name: 'Basic-Calulator',
    image: '/main-images/Basic-Calulator.png',
    site: '',
    code: '',
  },
  {
    name: 'Dice-Roll-Simulator',
    image: '/main-images/Dice-Roll-Simulator.png',
    site: '',
    code: '',
  },
  {
    name: 'Pomodoro-Timer',
    image: '/main-images/Pomodoro-Timer.png',
    site: '',
    code: '',
  },
  {
    name: 'Rock-Paper-Scissors-Game',
    image: '/main-images/Rock-Paper-Scissors-Game.png',
    site: '',
    code: '',
  },
  {
    name: 'Stopwatch',
    image: '/main-images/Stopwatch.png',
    site: '',
    code: '',
  },
  {
    name: 'Weather-App',
    image: '/main-images/Weather-App.png',
    site: '',
    code: '',
  },
  {
    name: 'Tabs-sections',
    image: '/main-images/Tabs-sections.png',
    site: '',
    code: '',
  },
  {
    name: 'Button-Ripple-Effect',
    image: '/main-images/Button-Ripple-Effect.png',
    site: '',
    code: '',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.querySelector('.projects-container');

  projects.forEach((project) => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    projectElement.innerHTML = `
      <div class="content">
        <p class="project-name">${project.name}</p>
        <div class="project1-img">
          <img src="${project.image}" alt="${project.name}" />
        </div>
      </div>
      <div class="link-buttons">
        <a href="https://lilycandoit.github.io/16-js-projects.github.io/${project.name}" target="_blank" rel="noopener noreferrer">
          <button>Site</button>
        </a>
        <a href="https://github.com/lilycandoit/16-js-projects.github.io/tree/main/${project.name}" target="_blank" rel="noopener noreferrer">
          <button>Code</button>
        </a>
      </div>
    `;

    projectsContainer.appendChild(projectElement);
  });
});
