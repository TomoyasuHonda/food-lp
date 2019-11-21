$(function({

  //conceptセクションを越えるとヘッダーの背景色を変えてやる

  $(window).scroll(function() {

    if ($(this).scrollTop() > 400) {
      $('ul.nav-menu').css('opacity', 0.8);
    } else {
      $('ul.nav-menu').css('opacity', 0.1);
    }

});

}));
