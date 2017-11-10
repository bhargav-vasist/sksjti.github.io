$(function () {
    var navPos = $('#navigation').offset().top;
    var navHeight = $('#navigation').height();
    var lastScroll = 0;
    var nav = $('#navigation');
    $(document).scroll(function() {
        
        if (window.innerWidth >= 768) {
            var curScroll = $(this).scrollTop();
            if (curScroll <= navPos) {
                nav.removeClass('final-nav-block');
                nav.removeClass('nav-move');
                nav.removeClass('rise-nav-block');
                nav.addClass('initial-nav-block');
            } else if (curScroll > navPos + navHeight) {
                //hidden navbar
                nav.removeClass('initial-nav-block');
                if (curScroll > lastScroll) {
                    //down
                    nav.removeClass('final-nav-block');
                    nav.addClass('rise-nav-block');
                    nav.addClass('nav-move');
                    nVisible = false;
                } else if (curScroll < lastScroll) {
                    //up
                    nVisible = true;
                    nav.removeClass('rise-nav-block');
                    nav.removeClass('nav-move');
                    nav.addClass('final-nav-block');
                } else {
                    //none
                }
            } else {
                //navbar visible
            }
            lastScroll = curScroll;
        }
    });
    
    
    function setHeaderHeight() {
        $('header').css("height", ($('.banner').outerHeight() + $('nav').outerHeight()) + "px");
    }

    
    //Should have executed after window loads
    //-------------------------------------------------
    if (window.innerWidth < 768) {
        $('header').css("height", "auto");
    } else {
        setHeaderHeight();
    }
    //-------------------------------------------------
    
    $(window).resize(function() {
        if (window.innerWidth < 768) {
            nav.removeClass('final-nav-block');
            nav.removeClass('rise-nav-block');
            nav.removeClass('nav-move');
            nav.addClass('initial-nav-block');
            $('header').css("height", "auto");
        } else {
            setHeaderHeight();
        }
    });
});

