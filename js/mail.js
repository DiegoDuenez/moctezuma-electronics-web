function mail() {

    var response = grecaptcha.getResponse();
    if (response.length != 0) {

        const nombre = $("#nombre").val()
        const correo = $("#correo").val()
        const asunto = $("#asunto").val()
        const mensaje = $("textarea#mensaje").val()

        if(nombre != "" && correo != "" && asunto != "" && mensaje != "" ){
            $.ajax({
                url: 'app/correo.php',
                type: 'post',
                data: {nombre, correo, asunto, mensaje},
                dataType: 'text',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function (response) {
                    $("#nombre").val('')
                    $("#correo").val('')
                    $("#asunto").val('')
                    $("textarea#mensaje").val('')
                    $('#status').text('')
                    Swal.fire(
                        {
                        title: "Gracias por enviarnos tu correo",
                        text: "Espera nuestra respuesta pronto",
                        icon: 'success',
                        confirmButtonText: "Ok",
                        }
                    )
                
                },
                error: function(xhr, status, error) {
                    $("#nombre").val('')
                    $("#correo").val('')
                    $("#asunto").val('')
                    $("textarea#mensaje").val('')
                    $('#status').text('')
                    console.log(xhr)
                    console.log(status)
                    console.log(error)
                }
            });
        }
        else{
            Swal.fire(
                {
                title: "Campos vacíos",
                text: "Debes de llenar todos los campos",
                icon: 'warning',
                confirmButtonText: "Ok",
                }
            )
        }
        
    }
    else {
        $('#status').text('¡Debes aceptar el captcha!')
    }

    
}