$(document).ready(function(){
  // seleccionando los elementos en variables
  var slider = $('#slider');
  var btnAnterior = $('#btnAnterior');
  var btnSiguiente = $('#btnSiguiente');

  // Se pasa el último slide al primer lugar
  $('#slider .slide:last').insertBefore('#slider .slide:first');

  // Margen negativo para mostrar el primer slide
  slider.css('margin-left', '-43%' );

  //Función para q el slide se mueva a la derecha
  function moverderecha(){
    slider.animate({
      marginLeft: '-105.6%'
    }, 700, function(){
      $('#slider .slide:first').insertAfter('#slider .slide:last');
      slider.css('margin-left', '-43%');
    });
  }

  btnSiguiente.on('click', moverderecha);

  // Función para mover el slide a la izquierda

  function moverIzquierda(){
    $('#slider .slide:last').insertBefore('#slider .slide:first');
    slider.css('margin-left', '-105.6%');
    slider.animate({
      marginLeft: '-43%'
    }, 700);
  }

  btnAnterior.on('click', moverIzquierda);

});
