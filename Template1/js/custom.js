$(document).ready(function(){
    var homeSwiper = new Swiper('#main-slider-swiper', {
        effect: 'fade',
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1
    });

    //var main_slider_swiper = new Swiper('#main-slider-swiper', {
    //    nextButton: '#main-slider__next',
    //    prevButton: '#main-slider__prev',
    //    pagination: '#main-slider__pagination',
    //    paginationClickable: true,
    //    loop: true
    //});

    var tm_feature_swiper = new Swiper('#tm-feature-swiper', {
        nextButton: '#tm-feature__next',
        prevButton: '#tm-feature__prev',
        paginationClickable: true,
        loop: true,
        slidesPerView: 8,
        autoplay: 2000,
        // spaceBetween: 45,
        breakpoints: {
            1199: {
                slidesPerView: 8
            },
            991: {
                slidesPerView: 6
            },
            767: {
                slidesPerView: 5
            },
            575: {
                slidesPerView: 3
            },
            320: {
                slidesPerView: 2
            }
        }

    });

    var tm_brands_swiper = new Swiper('#tm-brands-swiper', {
        nextButton: '#tm-brands__next',
        prevButton: '#tm-brands__prev',
        paginationClickable: true,
        loop: true,
        slidesPerView: 6,
        spaceBetween: 52,
        breakpoints: {
            1199: {
                slidesPerView: 5
            },
            991: {
                slidesPerView: 4
            },
            767: {
                slidesPerView: 3
            },
            575: {
                slidesPerView: 2
            }
        }
    });

    var tm_brands_swiper_2 = new Swiper('#tm-brands-swiper-2', {
        nextButton: '#tm-brands__next',
        prevButton: '#tm-brands__prev',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 80,
        autoplay: 5000,
        breakpoints: {
            991: {
                slidesPerView: 4
            },
            575: {
                slidesPerView: 3,
                spaceBetween: 60
            }
        }
    });

    var tm_table_swiper = new Swiper('.tm-table-swiper', {
        loop: true,
        slidesPerView: 5,
        direction: 'vertical',
        // centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    var dlapp_slider_swiper = new Swiper('#dlapp-slider-swiper', {
        nextButton: '#dlapp__next',
        prevButton: '#dlapp__prev',
        paginationClickable: true,
        loop: true
    });

    var popup_download_app_swiper = new Swiper('#popup-download-app-swiper', {
        loop: true,
        autoplay: 5000
    });

    $('#popup-download-app-close').on('click', function (e) {
        e.preventDefault();
        $(this).parent().removeClass('show');
    });


    //==
    // button uploadfile - support cursor for chrome
    //

    $(".btn-file").mousemove(function(e) {
        var offL, offT, width_input;
        offL = $(this).offset().left;
        offT = $(this).offset().top;
        width_input = $(this).find("input").width();
        $(this).find("input").css({
            left:e.pageX - offL - (width_input - 30),
            top:e.pageY - offT - 10
        })
    });


    //==
    // bootstrap-slider
    //

    $('.bootstrap-slider').slider();


    //==
    // bootstrap datepicker
    //

    $('.datepicker').datepicker();


    $(".incremental-counter").incrementalCounter();


    //==
    // select form - set default state
    //

    $("select").change(function() {
        if ($(this).find('option:selected').text() === $(this).find('option:first-child').text()) {
            $(this).addClass('form-control-default');
        } else {
            $(this).removeClass('form-control-default');
        }
    }).trigger( "change" );

    var breakpoint_mobile = 992;

    if ($(window).width() < breakpoint_mobile) {

        //==
        // // sidebar toggle mobile
        //
        var $sidebar_left = $('#sidebar-left'),
            $sidenav_toggle = $('#sidenav-toggle'),
            $mainnav_toggle = $('#main-nav-toggle');

        $sidenav_toggle.on('click', function (e) {
            e.preventDefault();

            $sidebar_left.toggleClass('open');
            // $(this).toggleClass('is-active');

            if ($sidebar_left.hasClass('open')) {
                $('body').prepend('<div id="sidebar-overlay" class="sidebar-overlay"></div>');

                $('#sidebar-overlay').fadeIn(300).on('click', function () {
                    close_sidebar_left();
                });
            } else {
                close_sidebar_left();
            }

            if (!$mainnav_toggle.hasClass('collapsed')) {
                $mainnav_toggle.trigger('click');
            }


        });

        $('#sidebar-close').on('click', function () {
            close_sidebar_left();
        });

        function close_sidebar_left() {
            $sidebar_left.removeClass('open');
            $('#sidebar-overlay').fadeOut(300, function () {
                $(this).remove();
            });
            // $sidenav_toggle.removeClass('is-active');
        }
    }


    //==
    // header - dropdown-notification
    //

    var $dropdown_with_backdrop = $('.dropdown-with-backdrop');
    var $backdrop = $('<div class="backdrop"></div>');

    $dropdown_with_backdrop.children('[data-toggle="dropdown"]').dropdown();
    $dropdown_with_backdrop.on('show.bs.dropdown', function () {
        console.log('show');
        var $this = $(this);
        $('body').append($backdrop);

        $backdrop.on('click', function () {
            $this.dropdown('toggle');
            $backdrop.remove();
        })
    });

    $dropdown_with_backdrop.on('hide.bs.dropdown', function () {
        $backdrop.remove();
    })
});