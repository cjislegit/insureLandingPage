let menuDiv = document.querySelector('.mobileMenuButton');

const toggleMobileMenu = () => {
  const menu = document.querySelector('.menu');
  const img = document.querySelector('.mobileMenuIcon');

  if (getComputedStyle(menu).display === 'flex') {
    menu.style.display = 'none';
    img.src = '/images/icon-hamburger.svg';
  } else {
    menu.style.display = 'flex';
    img.src = '/images/icon-close.svg';
  }
};

menuDiv.addEventListener('click', toggleMobileMenu);
