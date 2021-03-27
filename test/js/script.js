$(document).ready(function(){
	$('.cards').slick({
		arrows:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
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

