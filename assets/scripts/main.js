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

// window.onload(alert('hello world!'));

jQuery('.page-content').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 200
   });

// other animations
$('.fadeinload').addClass('animated fadeIn');
