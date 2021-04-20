$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
	});
});

$(function() {
    $('nav a').each(function() {
      $(this).on('click', function(e) {
        e.preventDefault()
        var scrollTo = $(this).attr('href')
        var whitespace = scrollTo == '#h1-about' ? 120 : 80
        $('html,body').animate({
          scrollTop: $(scrollTo).offset().top - whitespace
        }, 1000)
      })
    })
  })

