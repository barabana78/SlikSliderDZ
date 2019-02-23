;(function ($) {
    'use strict';
    $(function () {
        $('.slider').slick({
            infinite: true,//бесконечная прокрутка
            slide: 'div',//слайдами являются только теги img
            slidesToShow: 3,
            slidesToScroll: 1,
            //autoplay: true,
            autoplaySpeed: 2000,
            //focusOnSelect: true,//слайдится при клике
            centerMode: true,
            prevArrow: '.slider-prev',
            nextArrow: '.slider-next',
        });
    })
})(jQuery);