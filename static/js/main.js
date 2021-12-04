(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {




        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });



        $(".software__slider__wrapper").owlCarousel({
            items: 2,
            nav: true,
            dot: false,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            stagePadding: 192,
            navText: ["<i class='far fa-long-arrow-right'></i>", "<i class='far fa-long-arrow-left'></i>"],
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 20,
                },
                575: {
                    items: 1,
                    stagePadding: 80,
                }, 
                768: {
                    items: 2,
                    stagePadding: 30,
                },
                991: {
                    items: 2,
                    stagePadding: 125,
                }, 
                1200: {
                    items: 2,
                    stagePadding: 152,
                },
                1400: {
                    items: 2,
                    stagePadding: 192,
                }
            }


        });

        $(".hero__slide__wrapper").owlCarousel({
            items: 1,
            nav: true,
            dot: false,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            navText: ["<i class='far fa-long-arrow-right'></i>", "<i class='far fa-long-arrow-left'></i>"],  
        });





        //===== Sticky Menu-Bar Start
        $(window).on('scroll', function (event) {
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                $(".header__area").removeClass("sticky");
            } else {
                $(".header__area").addClass("sticky");
            }
        });
        //===== Sticky Menu-Bar End


        //===== Scroll To Top Start
        $(window).on('scroll', function (event) {
            if ($(this).scrollTop() > 600) {
                $('.scroll-top').fadeIn(200)
            } else {
                $('.scroll-top').fadeOut(200)
            }
        });





    });

    jQuery(window).load(function () {


    });


}(jQuery));