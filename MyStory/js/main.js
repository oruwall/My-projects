$(document).ready(function() {
    $('.header__burgher').click(function(event) {
        $('.header__burgher, .nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
  });
  
  $(document).ready(function() {
    $('.nav__link').click(function(event) {
        $('.header__burgher, .nav').removeClass('active');
        $('body').removeClass('lock');
    });
  });