$(document).ready(function () {
  $(".category__slider-list").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease", //анимация
    infinite: true, //бесконечная прокрутка
    initialSlide: 0, //стартовый слайдер
    autoplay: false, //автоматическая прокрутка
    autoplaySpeed: 2000, //скорость автопрокрутки
    pauseOnFocus: true, //паузы при автопрокрутке при наведении на различные области слайдера
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false, //невозможность пролистывания мышкой на пк
    swipe: true, //тачскрин мобильники пролистывание
    touchTreshold: 10, //количество частей, на которые делится слайд при свайпе
    touchMove: true, //включает все возможности тачскрина
    waitForAnimate: false, //возможность быстрого пролистывания слайдов самим пользователем
    centerMode: false, //выстраивание слайда по центру
    variableWidth: false, // адаптивность слайдера, хорошо работает с centerMode
    rows: 1, //количество рядов в слайдере
    slidesPerRow: 1, //количество слайдеров в ряду
    vertical: false, //вертикальный слайдер
    verticalSwiping: false, //вертикальный свайпер
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1730,
        settings: {
          slidesToShow: 3,
        },
      },
    ], //количество слайдов на различных разрешениях экрана, также можно применять все вышенаписанные свойства
    mobileFirst: true, //брейкпойнты для мобайлферст
  });
});
