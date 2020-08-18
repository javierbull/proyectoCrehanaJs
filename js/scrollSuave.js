$(document).ready(function(){

  // Mostrar y ocultar btn volver arriba

  var btnVolverArriba = $('#btnVolverArriba');

  $(window).on('scroll', function(){

    var proyectosOffSetTop = $('#proyectos').offset().top;

    if ( $(window).scrollTop() >= proyectosOffSetTop ) {
      btnVolverArriba.css('margin-right', 0);
    } else if ($(window).scrollTop() <= proyectosOffSetTop ) {
      btnVolverArriba.css('margin-right', '-60px');
    }

  })

  // Scroll suave

  // $('a.volver-arriba').on('click', function(e){
  //   e.preventDefault();
  //
  //   if ($(window).scrollTop() != 0) {
  //     $('html, body').animate({scrollTop:0}, 1000)
  //   }
  // });

});
