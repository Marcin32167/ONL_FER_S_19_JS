/*
  Poniżej napisz kod rozwiązujący zadania
 */

const edgeRef = document.querySelector('.edge');
edgeRef.style.backgroundImage = 'url(".img/edge.jpg)';

edgeRef.nextElementSibling.setAttribute('href', 'https://www.microsoft.com/pl-pl/edge');
edgeRef.nextElementSibling.setAttribute('target', '_blank');

const firefoxRef = document.querySelector('.firefox');
firefoxRef.style.backgroundImage = 'url(".img/firefox.jpg")';

firefoxRef.nextElementSibling.setAttribute('href', 'https://www.mozilla.org/pl/firefox/new');
firefoxRef.nextElementSibling.setAttribute('target', '_blank');

const chromeRef.querySelector('.chrome');
chromeRef.style.width = '100px'
chromeRef.nextElementSibling.textContent = 'Chrome';