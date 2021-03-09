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

$('.content2').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: '.arrow_prev',
    nextArrow: '.arrow_next',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  

    //   // Функция ymaps.ready() будет вызвана, когда
    // // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    // ymaps.ready(init);
    // function init(){
    //     // Создание карты.
    //     var myMap = new ymaps.Map("map", {
    //         // Координаты центра карты.
    //         // Порядок по умолчанию: «широта, долгота».
    //         // Чтобы не определять координаты центра карты вручную,
    //         // воспользуйтесь инструментом Определение координат.
    //         center: [55.76, 37.64],
    //         // Уровень масштабирования. Допустимые значения:
    //         // от 0 (весь мир) до 19.
    //         zoom: 7
    //     });
    // }

    // function init() {
    //     var myMap = new ymaps.Map('map', {
    //         center: [55.74, 37.58],
    //         zoom: 13,
    //         controls: []
    //     });
        
    //     // Создадим экземпляр элемента управления «поиск по карте»
    //     // с установленной опцией провайдера данных для поиска по организациям.
    //     var searchControl = new ymaps.control.SearchControl({
    //         options: {
    //             provider: 'yandex#search'
    //         }
    //     });
        
    //     myMap.controls.add(searchControl);
        
    //     // Программно выполним поиск определённых кафе в текущей
    //     // прямоугольной области карты.
    //     searchControl.search('Starbucks');
    // }
    
    // ymaps.ready(init);

    var location = ymaps.geolocation;
var myMap = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 10
}, {
    searchControlProvider: 'yandex#search'
});

// Получение местоположения и автоматическое отображение его на карте.
location.get({
        mapStateAutoApply: true
    })
.then(
    function(result) {
        // Получение местоположения пользователя.
        var userAddress = result.geoObjects.get(0).properties.get('text');
        var userCoodinates = result.geoObjects.get(0).geometry.getCoordinates();
        // Пропишем полученный адрес в балуне.
        result.geoObjects.get(0).properties.set({
            balloonContentBody: 'Адрес: ' + userAddress +
                                '<br/>Координаты:' + userCoodinates
    });
        myMap.geoObjects.add(result.geoObjects)
    },
    function(err) {
        console.log('Ошибка: ' + err)
    }
)