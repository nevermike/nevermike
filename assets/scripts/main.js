// post blow up image - need to change inline css to classes

// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//
//     if (scroll >= 200) {
//         $(".post-header__img").addClass("scrolled-up").next().addClass("title-space");
//     } else {
//         $(".post-header__img").removeClass("scrolled-up").next().removeClass("title-space");
//     }
// });

// scrolling animations

jQuery('.tourpoint__image').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 200
   });

jQuery('.tourpoint__copy').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInRight',
     offset: 100
    });

// other animations
$('.fadeinload').addClass('animated fadeIn');
