$(window).on("load", function (event) {
    $('body').removeClass('preloading');
    $('#preload').delay(1000).fadeOut('fast');
});
$(document).ready(function () {
    $('.my-slide').slick({
        dots: true,
        arrows: false,
    });
    $('.number').counterUp({
        delay: 10,
        time: 1000
    });
    $('.number-loading').counterUp({
        delay: 10,
        time: 400
    });
});