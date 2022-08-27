

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