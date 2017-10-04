// post blow up image - need to change inline css to classes

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".post-header__img").addClass("scrolled-up").next().addClass("title-space");
    } else {
        $(".post-header__img").removeClass("scrolled-up").next().removeClass("title-space");
    }
});
