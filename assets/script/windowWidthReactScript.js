let windowWidth = window.innerWidth;
let body;

let main = document.querySelector('main');
let header = document.querySelector('.header');
let menu = document.querySelector('.menu');
let menuHamburger = document.querySelector('.menuHamburger');
let accueilLink = document.querySelector('.accueilLink');
let evrtng = document.querySelector('*');
let contactContainer = document.querySelector('.container');

window.addEventListener('load', () => {
  windowSize();
});

window.addEventListener('resize', () => {
  windowSize();
});

function windowSize() {
  windowWidth = window.innerWidth;

  if (windowWidth <= 900) {
    body = document.querySelector('body');
    if (body) body.style.fontSize = '4vw';

    menu = document.querySelector('.menu');
    menuHamburger = document.querySelector('.menuHamburger');
    if (menu) menu.style.display = 'none';
    if (menuHamburger) menuHamburger.style.display = 'block';

    accueilLink = document.querySelector('.accueilLink');
    if (accueilLink) accueilLink.style.display = 'none';

    header = document.querySelector('.header');
    if (header) header.style.boxShadow = 'none';

    const aProposTitre = document.querySelector('.a_propos div');
    if (aProposTitre) aProposTitre.style.display = 'none';
  }
}