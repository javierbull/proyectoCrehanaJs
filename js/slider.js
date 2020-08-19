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

    if (!slider.is(':animated')) {
      slider.animate({
        marginLeft: '-105.6%'
      }, 700, function(){
        $('#slider .slide:first').insertAfter('#slider .slide:last');
        slider.css('margin-left', '-43%');
        resetInterval();
      });
    }
  }

  btnSiguiente.on('click', moverderecha);

  // Función para mover el slide a la izquierda

  function moverIzquierda(){
    if (!slider.is(':animated')) {
      $('#slider .slide:last').insertBefore('#slider .slide:first');
      slider.css('margin-left', '-105.6%');
      slider.animate({
        marginLeft: '-43%'
      }, 700, function(){
        resetInterval()
      });
    }

  }

  btnAnterior.on('click', moverIzquierda);

  // Intervalo para que el slide se mueva automáticamente
  var intervalo = setInterval(moverderecha, 5000);

  function resetInterval(){
    clearInterval(intervalo);
    intervalo = setInterval(moverderecha, 5000);
  }

});
