$(function() {

  $ ("li a").click(function(event){
    event.preventDefault();

    var id = $ (this).attr("href");

    var divPosition = $(id).offset().top;

    $("html, body").animate({scrollTop: divPosition});
  });

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-up').fadeIn('slow');
    if (scrolled < 200) $('.go-up').fadeOut('slow');
  });

  $('.go-up').click(function() {
    $("html, body").animate({
      scrollTop: "0"
    }, 200);
  });

});
