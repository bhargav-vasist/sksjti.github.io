$(document).scroll(function() {
    if (window.innerWidth >= 768) {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 180) {
            $('#navigation').removeClass('bg-dark');
            $('#navigation').removeClass('initial-nav-block');
            $('#navigation').addClass('final-nav-block');
        } else if (scrollPos <= 180) {
            $('#navigation').removeClass('final-nav-block');
            $('#navigation').addClass('initial-nav-block');
            $('#navigation').addClass('bg-dark');
        }
    }
});

$(window).resize(function() {
    if (window.innerWidth < 768) {
        if ($('#navigation').hasClass('final-nav-block')) {
            $('#navigation').removeClass('final-nav-block');
            $('#navigation').addClass('initial-nav-block');
            $('#navigation').addClass('bg-dark');
        }
    }
});
