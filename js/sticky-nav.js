$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.nav').addClass('sticky')
    } else {
        $('.nav').removeClass('sticky')
    }
    updateMenuStyles(); // Вызываем при загрузке страницы

    $(window).scroll(function () {
        updateMenuStyles();
    });

    $(window).resize(function () {
        updateMenuStyles();
    });

    function updateMenuStyles() {
        let scrollTop = $(window).scrollTop();
        let windowWidth = $(window).width();
        let $menu = $('.menu');

        if (windowWidth <= 700) {
            if (scrollTop > 100) {
                $menu.css('margin-top', '89px');
            } else {
                $menu.css('margin-top', '209px');
            }
        } else {
            $menu.css('margin-top', '');
        }
    }
    
});