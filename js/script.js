$(function () {
    var navPos = $('#navigation').offset().top;
    var lastScroll = 0;
    $(document).scroll(function() {
//        if (window.innerWidth >= 768) {
////            var scrollPos = $(window).scrollTop();
//            var scrollPos = $(window).scrollTop();
//            if (scrollPos > 180) {
//                $('#navigation').removeClass('bg-dark');
//                $('#navigation').removeClass('initial-nav-block');
//                $('#navigation').addClass('final-nav-block');
//            } else if (scrollPos <= 180) {
//                $('#navigation').removeClass('final-nav-block');
//                $('#navigation').addClass('initial-nav-block');
//                $('#navigation').addClass('bg-dark');
//            }
//        }
        
        if (window.innerWidth >= 768) {
            var curScroll = $(this).scrollTop();
            var nav = $('#navigation');
            
            if (curScroll > lastScroll || curScroll <= navPos) {
                nav.removeClass('final-nav-block');
                nav.addClass('initial-nav-block');
                nav.addClass('bg-dark');
                
            } else if (curScroll < lastScroll) {
                nav.removeClass('bg-dark');
                nav.removeClass('initial-nav-block');
                nav.addClass('final-nav-block');
            } else {
                
            }
            
//            var nVisible = true;
//            if (curScroll > navPos) {
//                //hidden navbar
//                console.log("Nav Hidden");
////                nav.removeClass("initial-nav-block");
////                nav.removeClass("bg-dark");
////                nav.addClass('final-nav-block');
//                
//                if (curScroll > lastScroll) {
//                    //down
//                    console.log("Nav Visible " + nVisible);
//                    console.log("Down");
//                    nVisible = false;
//                } else if (curScroll < lastScroll) {
//                    //up
//                    console.log("Up");
//                    nVisible = true;
//                } else {
//                    //none
//                }
//            } else {
//                //navbar visible
//                nVisible = true;
//                console.log("Nav Visible");
//            }
            
            lastScroll = curScroll;
        }
        
        
    });
    
    function setHeaderHeight() {

        $('header').css("height", ($('.banner').outerHeight() + $('nav').outerHeight()) + "px");
    }

    window.onload = setHeaderHeight;

    $(window).resize(function() {
        setHeaderHeight();
        if (window.innerWidth < 768) {
            if ($('#navigation').hasClass('final-nav-block')) {
                $('#navigation').removeClass('final-nav-block');
                $('#navigation').addClass('initial-nav-block');
                $('#navigation').addClass('bg-dark');
            }
        }
    });
});

