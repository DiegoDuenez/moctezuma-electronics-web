

var guias = [
    'resources/img/guias/agricola.jpg',
    'resources/img/guias/articulado.jpg',
    'resources/img/guias/cosechadora.jpg',
    'resources/img/guias/excavadora.jpg',
    'resources/img/guias/pasajeros.jpg',
    'resources/img/guias/pesada.jpg',
    'resources/img/guias/residuos.jpg',
    'resources/img/guias/semipesada.jpg',
]

var guiaImage = 0;

$(document).ready(function(){
   $("#img").attr('src', guias[guiaImage]);
})

if ($(window).width() > 700) {
    var lastScrollTop = 0
    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop
        if (scrollTop > "700") {
            $('#menuButton').css('top', '1rem')
            $('#progress-bar-container').css('top', '0')
        }
        else {
            $('#menuButton').css('display', 'flex')
            $('#menuButton').css('top', '-10rem')
            $('#progress-bar-container').css('top', '-10rem')
            $('#menuHide').removeClass('menu--show')
            $('#menuButton').empty()
            $('#menuButton').append('<i class="fa-solid fa-bars"></i> <p>MENÚ</p>')
        }
        lastScrollTop = scrollTop
    })

 }
 else {
 }



$('#menuButton').click(function(){

    if($('#menuHide').hasClass('menu--show')){
        $('#menuHide').removeClass('menu--show')
        $('#menuButton').empty()
        $('#menuButton').append('<i class="fa-solid fa-bars"></i> <p>MENÚ</p>')
    }
    else{
        $('#menuHide').addClass('menu--show')
        $('#menuButton').empty()
        $('#menuButton').append('<i class="fa-solid fa-xmark"></i> <p>CERRAR</p>')
    }

})

$('.menu__item').click(function(e) {
    
    if($('#menuHide').hasClass('menu--show')){
        $('#menuHide').removeClass('menu--show')
        $('#menuButton').empty()
        $('#menuButton').append('<i class="fa-solid fa-bars"></i> <p>MENÚ</p>')
    }

})


$('#btnSiguiente').click(function(){

    var img = $("#img")
    $('#btnAnterior').prop('disabled',false)
    guiaImage = (guiaImage  + 1) % guias.length;
    img.attr('src', guias[guiaImage]);
    animateCSS('#img', 'fadeIn');
    img.dequeue();

    if(guiaImage == guias.length -1){
        $(this).prop('disabled',true)
    }
   
})


$('#btnAnterior').click(function(){
  
    var img = $("#img")
    $('#btnSiguiente').prop('disabled',false)
    guiaImage = (guiaImage - 1) % guias.length;
    img.attr('src', guias[guiaImage]);
    animateCSS('#img', 'fadeIn');
    img.dequeue();
    
    if(guiaImage == 0){
        guiaImage = 0;
        $(this).prop('disabled',true)
    }
    
})


const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
