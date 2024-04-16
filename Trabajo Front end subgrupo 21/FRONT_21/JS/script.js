function isEmail(email) //valida campos de registro de usuario
 {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
     $("#botonEnviar").click(function() // verificación de campos no vacios
        {
            var campoVacio="";
            var mensajeError="";
                if($("#email").val() =="") //.val valida que escribio
                    {
                        campoVacio = campoVacio+"Email<br>";
                     }
                if($("#name").val() =="") 
                     {
                        campoVacio = campoVacio+"name<br>";
                    }
                 if($("#password").val() =="") 
                      {
                         campoVacio = campoVacio+"Pasword<br>";
                     }
                 if($("#confirmarpass").val() =="") 
                      {
                         campoVacio = campoVacio+"confirmar password<br>";
                     }
                 if(campoVacio!="")
                     {
                         mensajeError = "<p>los siguientes campos estan vacios</p>"+campoVacio+mensajeError;
                     }
                 // validacion de email
                 if(isEmail($("#email").val()) == false)
                    {
                          mensajeError = mensajeError+"<p> tu dirección de email no es valida</p>";
                     }
                // validacion numero campo telefono
                if($.isNumeric($("#rol").val()) == false)
                     {
                        mensajeError = mensajeError+"<p> selecciona un rol</p>";
                     }
                // confirmación de password
                 if ($("#password").val() != $("#confirmarpass").val())
                     {
                        mensajeError = mensajeError+"<p> las contraseñas no coinciden</p>";
                     }
                if (mensajeError!= "")
                     {
                         $("#mensajeErrorCampos").html(mensajeError);
                     }
                         else
                                 {
                                     $("#mensajeExito").html("<p>te has registrado con exito");
                                 }
         })