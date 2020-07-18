let navMain = document.querySelector('.menu__nav--opened');
let navToggle = document.querySelector('.menu__toggle');

navMain.classList.remove('menu__nav--nojs');


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('menu__nav--closed')) {
    navMain.classList.remove('menu__nav--closed');
    navMain.classList.add('menu__nav--opened');

  } else {
    navMain.classList.add('menu__nav--closed');
    navMain.classList.remove('menu__nav--opened');
  }
  if (navToggle.classList.contains('menu__toggle--closed')) {
    navToggle.classList.remove('menu__toggle--closed');
    navToggle.classList.add('menu__toggle--opened')
  } else {
    navToggle.classList.add('menu__toggle--closed');
    navToggle.classList.remove('menu__toggle--opened');
  }
});
/*navToggle.onclick = function () {
  navMain.classList.toggle('menu__nav--opened');
  navMain.classList.toggle('menu__nav--closed');
};*/
