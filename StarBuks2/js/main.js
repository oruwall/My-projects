(function () {
	const header = document.querySelector('.header')
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header_active');
		} else {
			header.classList.remove('header_active');
		}
	};
}());

$(document).ready(function() {
  $('.header__burgher').click(function(event) {
      $('.header__burgher,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.header__link').click(function(event) {
      $('.header__burgher,.header__menu').removeClass('active');
      $('body').removeClass('lock');
  });
});

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);


$('.multiple-items').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '.arrow_prev',
    nextArrow: '.arrow_next',
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          prevArrow: false,
          nextArrow: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          prevArrow: false,
          nextArrow: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });
    ymaps.ready(init);

function init() {
    var geolocation = ymaps.geolocation,
        myMap = new ymaps.Map('map', {
            center: [55, 34],
            zoom: 13,
            controls: ['geolocationControl']
        }, {
            searchControlProvider: 'yandex#search'
        });
    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
          }
      });
      myMap.controls.add(searchControl);
      searchControl.search('Starbucks');

    geolocation.get({
        provider: 'yandex',
        mapStateAutoApply: true
    }).then(function (result) {
        // Красным цветом пометим положение, вычисленное через ip.
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        result.geoObjects.get(0).properties.set({
            balloonContentBody: 'Мое местоположение'
        });
        myMap.geoObjects.add(result.geoObjects);
    });

    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    });
}
