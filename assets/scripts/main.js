// page fad in and out

$(document).ready(function() {
$('body').css('display', 'none');
$('body').fadeIn(500);
});
//
// $(document).on("click", "a", function () {
//
//     // get the href attribute
//     var newUrl = $(this).attr("href");
//
//     // veryfy if the new url exists or is a hash
//     if (!newUrl || newUrl[0] === "#") {
//         // set that hash
//         location.hash = newUrl;
//         return;
//     }
//
//     // now, fadeout the html (whole page)
//     $("html").fadeOut(function () {
//         // when the animation is complete, set the new location
//         location = newUrl;
//     });
//
//     // prevent the default browser behavior.
//     return false;
// });
