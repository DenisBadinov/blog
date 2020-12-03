$(document).ready(function () {
    var typed = new Typed('.coopr', {
      strings: ["dbadinov@mail.ru", "DenisBadinov"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true
    });
  });

(function ($) {
$(function () {
    $('#up').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 700);
    return false;
    })
})
})(jQuery);