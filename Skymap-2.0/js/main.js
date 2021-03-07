$(document).ready(function() {
    $('.header__burgher').click(function(event) {
        $('.header__burgher,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(window).scroll(function(e){
        $el = $('.header');
        $el.toggleClass('header_bar', $(this).scrollTop() > 0); 
    }); 
});