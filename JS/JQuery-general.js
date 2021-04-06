var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0; i < vars.length; i++) {
    var pair = vars[i].split("=");
}

var $elems;
var $urls;
var confirmSubmit = false

$(document).ready(function () {
    initVars.call(this);
    if(pair[1]==="true"){
        console.log("hola")
        $elems.index.nav_articulos_tab.attr("class", "nav-item nav-link");
        $elems.index.nav_articulos_tab.attr("aria-selected", false);
        $elems.index.nav_tutoriales_tab.attr("class", "nav-item nav-link active");
        $elems.index.nav_tutoriales_tab.attr("aria-selected", true);
        $elems.index.nav_articulos.attr("class", "tab-pane fade");
        $elems.index.nav_tutoriales.attr("class", "tab-pane fade active show");
    }

    /*    $elems.index.link_tutoriales.click(function() {
            $( "#target" ).click();

        });*/
/*

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
*/

});

function initVars() {
    $elems = {
        index: {
            nav_articulos_tab: $("#nav-articulos-tab"),
            nav_tutoriales_tab: $("#nav-tutoriales-tab"),
            nav_personal_tab: $("#nav-personal-tab"),
            nav_articulos: $("#nav-articulos"),
            nav_tutoriales: $("#nav-tutoriales"),
            nav_personal: $("#nav-personal"),
            link_tutoriales: $("#link_tutoriales"),
        },
        form: {
            formulario: $("#formulario"),
            idServicio: $('#servicioNotificacionId'),
            nuevoComentario: $('[name=nuevo_comentario]'),
            ubicacion: $('#ubicacion'),
            dropzone: $("#div-dropzone"),
            idsAdjuntos: $("#idsAdjuntos")
        },
        btn: {
            enviarComentario: $('#btn-enviar-comentario'),
            eliminarComentario: $('#btn-eliminar-comentario'),
            volver: $('[name=back]')
        }
    };
    $urls = {
        urlUploadTemp: $("#urlUploadTemp").val(),
        urlVolver: $elems.btn.volver.attr('href'),
        urlInfoAdjuntos: $elems.form.dropzone.attr('href'),
        urlDatosFichero: $('#urlDatosFichero').val()
    };
}

/*function clearSubmit(e) {
    document.body.setAttribute("style","cursor:progress;");
    $('#submit-btn').prop( "disabled", true );
}*/

function initNuevoComentario() {
    $elems.btn.enviarComentario.click(enviarComentario);
    $elems.btn.eliminarComentario.click(eliminarComentario);
}


function eliminarComentario(ev) {
    $elems.btn.eliminarComentario.attr("disabled", true);
    $.ajax({
        url: $elems.btn.eliminarComentario.attr('href')
    })
        .done(function (data, textStatus, jqXHR) {
            if (data.status === 'ok') {
                location.href = location.href;
            } else {
                alertUtil.error(data.error.join('<br>'));
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            $elems.btn.eliminarComentario.removeAttr('disabled');
            alert('No se ha podido realizar la conexión');
        });

    return false
}
