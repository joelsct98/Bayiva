

function Suscribirse() {
    var Usuario = document.getElementById('emailId');
    //console.log("User: "+Usuario.value);


    fetch('https://bayiva2.herokuapp.com/Bayiva/api/Suscribete/save', {
        method: 'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify({
            "subscribeId": NumeroSuscripciones+1,
            "email": Usuario.value
        })

    }).then(function(response) {
        if(response.ok) {
            return response.text()
            alert("Error en la llamada Ajax");

        } else {
            throw "Error en la llamada Ajax";
        }
    }).then(function (preguntas) {

        var arr=preguntas;
        ////console.log(arr);

        var datos = JSON.parse(arr);
        ////console.log(datos);
        alert("Hecho!");
    });
};


/*------------------Para sacar el numero total de Suscripciones----------------------*/
fetch('https://bayiva2.herokuapp.com/Bayiva/api/Suscribete/all', {
    method: 'GET',

}).then(function(response) {
    if(response.ok) {
        return response.text()
        alert("Error en la llamada Ajax");

    } else {
        throw "Error en la llamada Ajax";
    }
}).then(function (preguntas) {

    var arr=preguntas;
    ////console.log(arr);

    var datos = JSON.parse(arr);
    ////console.log(datos);

    var cajita = [];
    for (let item of datos) {
        cajita.push(item);
    }

    //console.log("----array----");

    for (var i = cajita.length - 1; i >= 0; i--) {

        //console.log(cajita[i]);
    }

    NumeroSuscripciones=cajita.length;
    //console.log(NumeroSuscripciones);
});

/*------------------Para Los contactos----------------------*/

function Enviar_correo(){

    var usuario = document.getElementById('nombre_contacto');
    //console.log("User: "+usuario.value);
    var apellido = document.getElementById('apellido_contacto');
    //console.log("User: "+apellido.value);
    var email = document.getElementById('email_contacto');
    //console.log("User: "+email.value);
    var telefono = document.getElementById('telefono_contacto');
    //console.log("User: "+telefono.value);
    var mensaje = document.getElementById('mensaje_contacto');
    //console.log("User: "+mensaje.value);
    var asunto = document.getElementById('asunto_contacto');
    //console.log("User: "+asunto.value);

    var contenido= "Nombre: "+usuario.value+"<br>" +
        "Apellido: "+apellido.value+"<br>" +
        "Email: "+email.value+"<br>" +
        "Telefono: "+telefono.value+"<br>" +
        "Mensaje: <br>"+"       " +
        ""+mensaje.value;


    //console.log(contenido);

    fetch('https://bayiva2.herokuapp.com/Bayiva/api/email/send', {
        method: 'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify({
            "email": "joelsct98@gmail.com",
            "content":contenido,
            "subject": "Bayiva-Email: "+asunto.value
        })

    }).then(function(response) {
        if(response.ok) {
            return response.text()
            alert("Error en la llamada Ajax");

        } else {
            throw "Error en la llamada Ajax";
        }
    }).then(function (preguntas) {

        var arr=preguntas;
        ////console.log(arr);

        var datos = JSON.parse(arr);
        ////console.log(datos);
        alert("hecho!");
    });

}


