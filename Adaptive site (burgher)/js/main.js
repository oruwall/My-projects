$(document).ready(function() {
    $('.header__burgher').click(function(event) {
        $('.header__burgher,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});