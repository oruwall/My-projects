$(document).ready(function(){
	$('.cards').slick({
		arrows:true,
		dots: true,
		dotsClass: "my-dots",
		prevArrow: '.arrow_prev',
		nextArrow: '.arrow_next',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		speed: 700,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

