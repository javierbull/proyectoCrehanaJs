$(document).ready(function(){

  var fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function(){

    var proyectosOffSetTop = $('#proyectos').offset().top;

    if ($(window).scrollTop() >= proyectosOffSetTop) {
      fixedHeader.css('margin-top', 0);
    } else if ($(window).scrollTop() <= proyectosOffSetTop) {
      fixedHeader.css('margin-top', '-68px');  
    }

  })
});
