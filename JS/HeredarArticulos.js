
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    //console.pair;

}

/*-----------------------------variables de uso---------------------------*/
x=1;

/*-----------------------------variables de uso---------------------------*/

var ArticleId= pair

/*-----------------botones comentarios------------------*/
function Responder(Id) {
    var resul = document.getElementById('resultado_text'+Id);

    resul.setAttribute("style","display:block;");

    //resul.style.display = "block";
    //var ArticleId=boton.value;
    //window.location=link+"?Id="+ArticleId;
    return resul;
};

function Cerrar(Id) {
    var resul = document.getElementById('resultado_text'+Id);

    resul.setAttribute("style","display:none;background-color: black; color: white;");
    //resul.style.display = "block";
    //var ArticleId=boton.value;
    //window.location=link+"?Id="+ArticleId;
    return resul;
};

function Enviar() {

    /*-----------------rescursos---------------*/

    fetch('https://bayiva2.herokuapp.com/Bayiva/api/comentariosA/all', {
        method: 'GET',
        //body:JSON(1)

    }).then(function(response) {
        if(response.ok) {
            return response.text()
            alert("Error en la llamada Ajax");

        } else {
            throw "Error en la llamada Ajax";
        }
    }).then(function (preguntas) {

        var arr = preguntas;

        var datos = JSON.parse(arr);

        var cajita = [];
        for (let item of datos) {

            cajita.push(item);
        }
        //console.log("----Numero total comment----");

        var NumeroComentariosTotal=0
        for (var i = cajita.length - 1; i >= 0; i--) {
            //console.log(cajita[i].commentsAId);
            if (cajita[i].commentsAId > NumeroComentariosTotal) {
                NumeroComentariosTotal = cajita[i].commentsAId;
            }
        }
        //console.log(NumeroComentariosTotal);

        //console.log("----Numero total comment----");


        var Usuario = document.getElementById('identityMenu');

        var resul = document.getElementById('validationTextarea');

        var d = new Date();
        var meses= d.getMonth()+1;

        IdEnviado=NumeroComentariosTotal+1;
        var IdActual=pair[1];
        fetch('https://bayiva2.herokuapp.com/Bayiva/api/comentariosA/save', {
            method: 'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify({
                "commentsAId": NumeroComentariosTotal+1,
                "articleId": IdActual,
                "user": Usuario.value,
                "date":d.getDate()+"/"+meses+"/"+d.getFullYear() ,
                "hour": d.getHours()+":"+d.getMinutes(),
                "description": resul.value
                //"articles": articles

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
            generarLikes(IdEnviado);
            var textArea=$("#validationTextarea")
            var usuarios=$("#identityMenu")

            textArea.val("")
            usuarios.val("")
            alert("!Hecho¡")
        });
    });
};

function generarLikes(IdEnviado){
    //console.log("--------pair[1]----------");
    ////console.log(pair[1]);
    loko=pair[1];
    //console.log(loko);
    //console.log("--------pair[1]----------");
    /*---------crear el sistema de likes en el comentarios-------------*/
    fetch('https://bayiva2.herokuapp.com/Bayiva/api/megustasComentarios/save', {
        method: 'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify({
            "likesCommentsId": IdEnviado,
            "commentsId": IdEnviado,
            "numberLikes": 0,
            "articleId": loko
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
    });
}


function RespuestaGenerar(Id){
    /*-----------------Cambio del display------------------*/
    var resul = document.getElementById('resultado_respuestas'+Id);
    var Botton_VerRespuestas = document.getElementById('botton_RespuestaGenerar'+Id);
    var resul_cierre = document.getElementById('botton_cierre_respuestas'+Id);


    resul.setAttribute("style","display:block;");
    resul_cierre.setAttribute("style","display:block;color: aquamarine; right: 25px;");
    //Botton_VerRespuestas.setAttribute("style","display:none;color: aquamarine; right: 25px;");

    //Botton_VerRespuestas.disabled = false;

    /*-----------------Cambio del display------------------*/


    /*-----------------generando el respuestas------------------*/


    fetch('https://bayiva2.herokuapp.com/Bayiva/api/respuestasA/getByCommentId/'+Id, {
        method: 'GET',
        //body:JSON(1)

    }).then(function(response) {
        if(response.ok) {
            return response.text()
            alert("Error en la llamada Ajax");

        } else {
            throw "Error en la llamada Ajax";
        }
    }).then(function (preguntas) {

        var arr = preguntas;
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
        //console.log("----array----");
        //console.log(Id);

        var container = document.getElementById("resultado_respuestas"+Id);

        for (var i = cajita.length - 1; i >= 0; i--) {
            var divContenedor = document.createElement("div");
            //divContenedor.setAttribute("class", "mt-3 mb-2");
            divContenedor.setAttribute("id", "respuestasGeneradas"+Id+"-" + i);
            //divContenedor.innerHTML += "<h3></h3>"

            //contenedor del contenido

            container.appendChild(divContenedor);
        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var container = document.getElementById("respuestasGeneradas"+Id+"-"+i);
            var divContenedor = document.createElement("div");
            divContenedor.setAttribute("class", "row");
            divContenedor.setAttribute("id", "rowRespuestasGeneradas"+Id+"-" + i);

            container.appendChild(divContenedor);
        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var container = document.getElementById("rowRespuestasGeneradas"+Id+"-"+i);

            var divContenedor = document.createElement("div");
            divContenedor.setAttribute("class", "col-2");

            var divContenedor2 = document.createElement("div");
            divContenedor2.setAttribute("class", "col-10");
            divContenedor2.setAttribute("id", "rowRespuestasGeneradasCol"+Id+"-"+ i);

            container.appendChild(divContenedor);
            container.appendChild(divContenedor2);
        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var container = document.getElementById("rowRespuestasGeneradasCol"+Id+"-"+i);

            var divContenedor = document.createElement("div");
            divContenedor.setAttribute("class", "row");
            divContenedor.setAttribute("id", "rowRespuestasG"+Id+"-"+i);

            container.appendChild(divContenedor);
        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var container = document.getElementById("rowRespuestasGeneradasCol"+Id+"-"+i);

            var divContenedor = document.createElement("div");
            divContenedor.setAttribute("class", "row");
            divContenedor.setAttribute("id", "rowRespuestasG"+Id+"-"+i);

            container.appendChild(divContenedor);
        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var ContenedorRow = document.getElementById("rowRespuestasG"+Id+"-"+i);

            x = 0;
            /*-----------------*/
            var divContenedor1 = document.createElement("div");
            divContenedor1.setAttribute("class", "col-8");
            divContenedor1.setAttribute("id", "DatosUser" + Id + "-" + i+x++);
            /*-----------------*/
            var divContenedor2 = document.createElement("div");
            divContenedor2.setAttribute("class", "col-4 text-right");
            divContenedor2.setAttribute("id", "DatosUser" + Id + "-" + i+x++);
            /*-----------------*/
            var divContenedor3 = document.createElement("div");
            divContenedor3.setAttribute("class", "col-12 mb-2");
            divContenedor3.setAttribute("id", "DatosUser" + Id + "-" +i+x++);
            /*-----------------*/
            var divContenedor4 = document.createElement("div");
            divContenedor4.setAttribute("class", "col-8");
            divContenedor4.setAttribute("id", "DatosUser" + Id + "-" +i+x++);
            /*-----------------*/
            var divContenedor5 = document.createElement("div");
            divContenedor5.setAttribute("class", "col-4 text-right");
            divContenedor5.setAttribute("id", "DatosUser" + Id + "-" +i+x++);

            //divContenedor.innerHTML+=cajita[i].imagesAS[0].url;

            //contenedor del contenido

            ContenedorRow.appendChild(divContenedor1);
            ContenedorRow.appendChild(divContenedor2);
            ContenedorRow.appendChild(divContenedor3);
            ContenedorRow.appendChild(divContenedor4);
            ContenedorRow.appendChild(divContenedor5);

        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var Contenedor = document.getElementById("DatosUser" + Id + "-" +i+ 0);


            /*----Usuario-----*/
            var divContenedor = document.createElement("span");
            divContenedor.setAttribute("id", "usuario");


            /*----hora-----*/
            var divContenedorUser = document.createElement("span");
            divContenedorUser.setAttribute("id", "hora");

            divContenedor.innerHTML += cajita[i].user + "&nbsp&nbsp";
            divContenedorUser.innerHTML += cajita[i].hour;

            //contenedor del contenido
            Contenedor.appendChild(divContenedor);
            Contenedor.appendChild(divContenedorUser);
        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var Contenedor = document.getElementById("DatosUser" + Id + "-" +i+ 1);

            var divContenedor = document.createElement("span");
            divContenedor.setAttribute("id", "fecha");

            divContenedor.innerHTML += cajita[i].date;

            //contenedor del contenido

            Contenedor.appendChild(divContenedor);

        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var Container = document.getElementById("DatosUser" + Id + "-" +i+ 2);

            var divContenedor1 = document.createElement("span");
            divContenedor1.setAttribute("style", "color: white");

            divContenedor1.innerHTML += cajita[i].description;

            //contenedor del contenido

            Container.appendChild(divContenedor1);

        }
        for (var i = cajita.length - 1; i >= 0; i--) {

            var ContenedorCorazones = document.getElementById("DatosUser" + Id + "-" +i+ 3);


            var divContenedor1 = document.createElement("input");
            divContenedor1.setAttribute("type", "image");
            divContenedor1.setAttribute("style", "height: 25px; width: 25px;visibility:hidden");
            divContenedor1.setAttribute("alt", "Login");
            divContenedor1.setAttribute("src", "../../img/responder.png");
            divContenedor1.setAttribute("onclick", "Responder(" + i + ")");

            var divContenedor2 = document.createElement("img");
            /*
            divContenedor2.setAttribute("src", "../../img/corazonRojo.png");
            divContenedor2.setAttribute("id", "imagen-cambiante");
            divContenedor2.setAttribute("onclick", "Likes("+Id+")");

*/
            var divContenedor3 = document.createElement("img");
            /*
            divContenedor3.setAttribute("src", "../../img/corazon.png");
            divContenedor3.setAttribute("id", "imagen-cambiante");
            divContenedor3.setAttribute("class", "cambio");
*/
            var divContenedor4 = document.createElement("div");
            /*
            divContenedor4.setAttribute("style", "left: 70px; top: 1px;position: absolute");
            divContenedor4.setAttribute("id", "resaltar");
*/

            //divContenedor4.innerHTML += 85;

            //contenedor del contenido

            ContenedorCorazones.appendChild(divContenedor1);
            ContenedorCorazones.appendChild(divContenedor2);
            ContenedorCorazones.appendChild(divContenedor3);
            ContenedorCorazones.appendChild(divContenedor4);
        }



        return resul,resul_cierre,Botton_VerRespuestas,container;
    });
    /*-----------------generando el respuestas------------------*/

};

function CerrarRespuestas(Id){

    var Botton_VerRespuestas = document.getElementById('botton_RespuestaGenerar'+Id);
    var resul = document.getElementById('resultado_respuestas'+Id);
    var resul_cierre = document.getElementById('botton_cierre_respuestas'+Id);


    resul.setAttribute("style","display:none;");
    resul_cierre.setAttribute("style","display:none;color: aquamarine; right: 25px;");
    //Botton_VerRespuestas.setAttribute("style","display:block;color: aquamarine; right: 25px;");

    resul.innerHTML = "";


    //resul.style.display = "block";
    //var ArticleId=boton.value;
    //window.location=link+"?Id="+ArticleId;
    return resul,resul_cierre,Botton_VerRespuestas;
};

/*-------Para generar las respuesta en cada comentarios---------*/
function ComentarRespuesta(Id){
    var Usuario = document.getElementById('identityMenu'+Id);
    //console.log("User: "+Usuario.value);

    var resul = document.getElementById('validationTextarea'+Id);
    //console.log("Contenido: "+resul.value);

    var d = new Date();
    //console.log(d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate());
    //console.log(d.getHours()+":"+d.getMinutes());
    ////console.log(Numero_Respuestas+1);

    var meses= d.getMonth()+1;

    var Respuestanum= Numero_Respuestas+1;
    //console.log(Respuestanum);
    //console.log(Id);

    ////console.log(Respuestanum);

    fetch('https://bayiva2.herokuapp.com/Bayiva/api/respuestasA/save', {
        method: 'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify({
            "answersAId": Respuestanum,
            "commentsAId": Id,
            "user": Usuario.value,
            "date":d.getDate()+"/"+meses+"/"+d.getFullYear(),
            "hour": d.getHours()+":"+d.getMinutes(),
            "description": resul.value
            //"articles": articles

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

    //return resul,resul_cierre;
};
/*-----------------botones comentarios------------------*/


/*-----------------Systema de Likes------------------*/
fetch('https://bayiva2.herokuapp.com/Bayiva/api/megustasArticulos/getByArticlesId/'+pair[1], {
    method: 'GET',
    //body:JSON(1)

}).then(function(response) {
    if(response.ok) {
        return response.text()
        alert("Error en la llamada Ajax");

    } else {
        throw "Error en la llamada Ajax";
    }
}).then(function (preguntas) {

    var arr = preguntas;

    var datos = JSON.parse(arr);

    var cajita = [];
    for (let item of datos) {
        cajita.push(item);
    }

    numberLikes = cajita[0].numberLikes;

    //console.log(numberLikes);
    var aumentar_likes = document.getElementById("MeGustasArticle");

    aumentar_likes.innerHTML=""+numberLikes;
});

function Likes(){

    numberLikes=numberLikes+1;
    //console.log("-----------------Suma----------------------");
    //console.log(numberLikes);
    fetch('https://bayiva2.herokuapp.com/Bayiva/api/megustasArticulos/save', {
        method: 'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify({
            "likesArticleId": pair[1],
            "articleId": pair[1],
            "numberLikes": numberLikes,
            "numberOption_1": 1,
            "numberOption_2": 1
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
    });

    var aumentar_likes = document.getElementById("MeGustasArticle");

    aumentar_likes.innerHTML=""+numberLikes;

}

function Likes(id){

    numberLikes=numberLikes+1;
    //console.log("-----------------Suma----------------------");
    //console.log(numberLikes);
    fetch('https://bayiva2.herokuapp.com/Bayiva/api/megustasArticulos/save', {
        method: 'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify({
            "likesArticleId": id,
            "articleId": id,
            "numberLikes": numberLikes,
            "numberOption_1": 1,
            "numberOption_2": 1
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
    });

    var aumentar_likes = document.getElementById("MeGustasArticle");

    aumentar_likes.innerHTML=""+numberLikes;

}

/*-----------------Comentarios Likes------------------*/


function LikesC(Id){

    fetch('https://bayiva2.herokuapp.com/Bayiva/api/megustasComentarios/getByComentsId/'+Id, {
        method: 'GET',
        //body:JSON(1)

    }).then(function(response) {
        if(response.ok) {
            return response.text()
            alert("Error en la llamada Ajax");

        } else {
            throw "Error en la llamada Ajax";
        }
    }).then(function (preguntas) {

        var arr = preguntas;

        var datos = JSON.parse(arr);

        var cajita = [];
        for (let item of datos) {
            cajita.push(item);
        }

        numberLikesComentarios = cajita[0].numberLikes;

        //console.log(numberLikesComentarios);
        /*
        var aumentar_likes = document.getElementById("MeGustasArticle");

        aumentar_likes.innerHTML=""+numberLikesComentarios;
        */

        numberLikesComentarios=numberLikesComentarios+1;
        //console.log("-----------------Suma----------------------");
        //console.log(numberLikesComentarios);

        fetch('https://bayiva2.herokuapp.com/Bayiva/api/megustasComentarios/save', {
            method: 'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify({
                "likesCommentsId": Id,
                "commentsId": Id,
                "numberLikes": numberLikesComentarios,
                "articleId": pair[1]
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
        });

        var aumentar_likes = document.getElementById("MeGustasArticle"+Id);

        aumentar_likes.innerHTML=""+numberLikesComentarios;

    });



}

/*-----------------Systema de Likes------------------*/



fetch('https://bayiva2.herokuapp.com/Bayiva/api/articles/getByArticlesId/'+pair[1], {
    method: 'GET',
    //body:JSON(1)

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
    //console.log(datos);


    var cajita = [];
    for(let item of datos){
        cajita.push(item);
    }

});

fetch('https://bayiva2.herokuapp.com/Bayiva/api/comentariosA/getByArticleId/'+pair[1], {
    method: 'GET',
    //body:JSON(1)

}).then(function(response) {
    if(response.ok) {
        return response.text()
        alert("Error en la llamada Ajax");

    } else {
        throw "Error en la llamada Ajax";
    }
}).then(function (preguntas) {

    var arr = preguntas;

    var datos = JSON.parse(arr);

    var cajita = [];
    for (let item of datos) {

        cajita.push(item);
    }

    NumeroComentarios = cajita.length;

    //console.log("----array----");

    for (var i = cajita.length - 1; i >= 0; i--) {

        //console.log(cajita[i]);
    }
    //console.log("----array----");

    var botton_carga = document.getElementById("NumeroDeComentarios");

    botton_carga.innerHTML="Comentarios: "+NumeroComentarios;

    //console.log(NumeroComentarios);
});

function CerrarLoGenerar(){

    var Botton_VerRespuestas = document.getElementById('NumeroDeComentarios');
    var resul = document.getElementById('PosicionarComentarios');

    var Botton_CerrarRespuestas = document.getElementById('NumeroDeComentariosCerrar');

    Botton_CerrarRespuestas.setAttribute("style","display:none;width: 100%;");
    //var resul_cierre = document.getElementById('botton_cierre_respuestas'+Id);

    Botton_VerRespuestas.setAttribute("style","display:block;width: 100%;");
    //resul_cierre.setAttribute("style","display:none;color: aquamarine; right: 25px;");
    //Botton_VerRespuestas.disabled = true;

    resul.innerHTML = "";


    //resul.style.display = "block";
    //var ArticleId=boton.value;
    //window.location=link+"?Id="+ArticleId;
    //return resul,resul_cierre,Botton_VerRespuestas;
    return resul,Botton_CerrarRespuestas,Botton_VerRespuestas;
};


function Generar() {

    var Botton_VerRespuestas = document.getElementById('NumeroDeComentarios');
    var Botton_CerrarRespuestas = document.getElementById('NumeroDeComentariosCerrar');

    Botton_CerrarRespuestas.setAttribute("style","display:block;width: 100%;");
    Botton_VerRespuestas.setAttribute("style","display:none;width: 100%;");


    fetch('https://bayiva2.herokuapp.com/Bayiva/api/comentariosA/getByArticleId/'+pair[1], {
        method: 'GET',
        //body:JSON(1)

    }).then(function(response) {
        if(response.ok) {
            return response.text()
            alert("Error en la llamada Ajax");

        } else {
            throw "Error en la llamada Ajax";
        }
    }).then(function (preguntas) {

        var arr = preguntas;
        ////console.log(arr);

        var datos = JSON.parse(arr);
        ////console.log(datos);

        var cajita = [];
        for (let item of datos) {
            /*
            -Lo puedo usar para coger solo un valor
            -del objeto en cuestion

            cajita.push(item.texto);
            //console.log(item.texto);
            */
            cajita.push(item);
            ////console.log(item);
        }

        //console.log("---------------------------------------");
        articles = cajita[0].articles;

        ////console.log(articles);
        //console.log("---------------------------------------");

        NumeroComentarios = cajita.length;

        /*---------Cosas por detras---------*/
        var container = document.getElementById("PosicionarComentarios");
        for (var i = cajita.length - 1; i >= 0; i--) {
            var divContenedor = document.createElement("div");
            divContenedor.setAttribute("class", "mt-3 mb-2");
            divContenedor.setAttribute("id", "comentarios" + i);

            /*-------------------separacion--------------------*/
            divContenedor.innerHTML += "<h3></h3>"

            //contenedor del contenido

            container.appendChild(divContenedor);

        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var Contenedor = document.getElementById("comentarios" + i);

            var CommentId= cajita[i].commentsAId;

            var divContenedor = document.createElement("div");
            divContenedor.setAttribute("class", "row");
            divContenedor.setAttribute("id", "row" + i);


            var TextAreaEscondido = document.createElement("div");
            TextAreaEscondido.setAttribute("style", "display:none;");
            TextAreaEscondido.setAttribute("id", "resultado_text" + i);
            TextAreaEscondido.setAttribute("class", "mt-2");


            var BotonesDisplay = document.createElement("div");
            BotonesDisplay.setAttribute("id", "BotonesDisplay" + i);
            BotonesDisplay.setAttribute("class", "col-12");

            var resultado_respuestas = document.createElement("div");
            resultado_respuestas.setAttribute("id", "resultado_respuestas" + CommentId);
            resultado_respuestas.setAttribute("class", "container");
            resultado_respuestas.setAttribute("style", "display:none;");



            //contenedor del contenido

            Contenedor.appendChild(divContenedor);
            Contenedor.appendChild(TextAreaEscondido);
            Contenedor.appendChild(BotonesDisplay);
            Contenedor.appendChild(resultado_respuestas);
        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var ContenedorRow = document.getElementById("row" + i);

            x = 0;
            /*-----------------*/
            var divContenedor1 = document.createElement("div");
            divContenedor1.setAttribute("class", "col-8");
            divContenedor1.setAttribute("id", "row" + i + "-" + x++);
            /*-----------------*/
            var divContenedor2 = document.createElement("div");
            divContenedor2.setAttribute("class", "col-4 text-right");
            divContenedor2.setAttribute("id", "row" + i + "-" + x++);
            /*-----------------*/
            var divContenedor3 = document.createElement("div");
            divContenedor3.setAttribute("class", "col-12 mb-2");
            divContenedor3.setAttribute("id", "row" + i + "-" + x++);
            /*-----------------*/
            var divContenedor4 = document.createElement("div");
            divContenedor4.setAttribute("class", "col-8");
            divContenedor4.setAttribute("id", "row" + i + "-" + x++);
            /*-----------------*/
            var divContenedor5 = document.createElement("div");
            divContenedor5.setAttribute("class", "col-4 text-right");
            divContenedor5.setAttribute("id", "row" + i + "-" + x++);

            //divContenedor.innerHTML+=cajita[i].imagesAS[0].url;

            //contenedor del contenido

            ContenedorRow.appendChild(divContenedor1);
            ContenedorRow.appendChild(divContenedor2);
            ContenedorRow.appendChild(divContenedor3);
            ContenedorRow.appendChild(divContenedor4);
            ContenedorRow.appendChild(divContenedor5);
        }


        /*----------------comentarios-----------------------*/
        for (var i = cajita.length - 1; i >= 0; i--) {
            var Contenedor = document.getElementById("row" + i + "-" + 0);


            /*----Usuario-----*/
            var divContenedor = document.createElement("span");
            divContenedor.setAttribute("id", "usuario");


            /*----hora-----*/
            var divContenedorUser = document.createElement("span");
            divContenedorUser.setAttribute("id", "hora");

            divContenedor.innerHTML += cajita[i].user + "&nbsp&nbsp";
            divContenedorUser.innerHTML += cajita[i].hour;

            //contenedor del contenido
            Contenedor.appendChild(divContenedor);
            Contenedor.appendChild(divContenedorUser);
        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var Contenedor = document.getElementById("row" + i + "-" + 1);

            var divContenedor = document.createElement("span");
            divContenedor.setAttribute("id", "fecha");

            divContenedor.innerHTML += cajita[i].date;

            //contenedor del contenido

            Contenedor.appendChild(divContenedor);

        }

        for (var i = cajita.length - 1; i >= 0; i--) {
            var Contenedor = document.getElementById("row" + i + "-" + 2);

            var divContenedor = document.createElement("span");
            divContenedor.setAttribute("style", "color: white");

            divContenedor.innerHTML += cajita[i].description;

            //contenedor del contenido

            Contenedor.appendChild(divContenedor);

        }

        /*--------Botones de Likes-------*/

        for (var i = cajita.length - 1; i >= 0; i--) {
            var Contenedor = document.getElementById("row" + i + "-" + 3);

            var CommentId= cajita[i].commentsAId;

            var divContenedor1 = document.createElement("input");
            divContenedor1.setAttribute("type", "image");
            divContenedor1.setAttribute("style", "height: 25px; width: 25px;");
            divContenedor1.setAttribute("alt", "Login");
            divContenedor1.setAttribute("src", "../../img/responder.png");
            divContenedor1.setAttribute("onclick", "Responder(" + i + ")");

            var divContenedor2 = document.createElement("img");
            divContenedor2.setAttribute("src", "../../img/corazonRojo.png");
            divContenedor2.setAttribute("id", "imagen-cambiante");
            //divContenedor2.setAttribute("onclick", "Likes(" + CommentId + ")");


            var divContenedor3 = document.createElement("img");
            divContenedor3.setAttribute("src", "../../img/corazon.png");
            divContenedor3.setAttribute("id", "imagen-cambiante");
            divContenedor3.setAttribute("class", "cambio");
            divContenedor3.setAttribute("onclick", "LikesC(" + CommentId + ")");


            var divContenedor4 = document.createElement("div");
            divContenedor4.setAttribute("style", "left: 70px; top: 1px;position: absolute");
            divContenedor4.setAttribute("id", "MeGustasArticle" + CommentId);


            divContenedor4.innerHTML += 0;

            //contenedor del contenido

            Contenedor.appendChild(divContenedor1);
            Contenedor.appendChild(divContenedor2);
            Contenedor.appendChild(divContenedor3);
            Contenedor.appendChild(divContenedor4);

        }

        //Contenedor.innerHTML+=""


        /*----------textareaEscondido------------------*/

        for (var i = cajita.length - 1; i >= 0; i--) {
            var Contenedor = document.getElementById("resultado_text" + i);

            var CommentId= cajita[i].commentsAId;

            Contenedor.innerHTML += "                            <div class=\"row\">\n" +
                "                              <div class=\"col-12\">\n" +
                "                                <div class=\"row\">\n" +
                "                                  <div class=\"col-12\">\n" +
                "                                    <textarea class=\"form-control\" id=\"validationTextarea" + CommentId + "\" " +
                "                                               style=\"background-color: black; color: white;\"\n" +
                "                                           placeholder=\"Dime lo que piensas...\" required></textarea>\n" +
                "                                  </div>\n" +
                "                                  <div class=\"col-12\">\n" +
                "                                    <div class=\"row mt-2\">\n" +
                "                                      <div class=\"col-8\">\n" +
                "                                        <div class=\"row\">\n" +
                "                                          <div class=\"col-4 text-left text-md-right text-lg-right\">\n" +
                "                                            <label for=\"commet\" id=\"resaltar\">Comentar como:</label>\n" +
                "                                          </div>\n" +
                "\n" +
                "                                          <div class=\"col-8 text-left\">\n" +
                "                              <input type=\"text\" id=\"identityMenu" + CommentId + "\" list=\"lista_opciones" + i + "\" />\n" +
                "\n" +
                "                              <datalist id=\"lista_opciones" + i + "\" name=\"commet\" dir=\"ltr\">\n" +
                "                                <option value=\"NONE\" disabled=\"\">Seleccionar perfil...</option>\n" +
                "                                <option value=\"Anónimo\">Anónimo</option>\n" +
                "                              </datalist>\n" +
                "                                          </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                      </div>\n" +
                "\n" +
                "\n" +
                "                                      <div class=\"col-4 text-right\">\n" +
                "                                        <button type=\"button\" id=\"Enviar\" class=\"btn btn-warning\" onclick=\"ComentarRespuesta(" + CommentId + ")\">Comentar</button>\n" +
                "                                        <button type=\"button\" id=\"Enviar\" class=\"btn btn-warning\" onclick=\"Cerrar(" + i + ")\">Cerrar</button>\n" +
                "                                      </div>\n" +
                "                                    </div>\n" +
                "\n" +
                "                                  </div>\n" +
                "                              </div>\n" +
                "                            </div>\n" +
                "\n" +
                "\n" +
                "                          </div>\n";

        }
        /*----------textareaEscondido------------------*/



        /*----------BotonesDisplay------------------*/

        for (var i = cajita.length - 1; i >= 0; i--) {
            var Contenedor = document.getElementById("BotonesDisplay" + i);

            var CommentId= cajita[i].commentsAId;


            Contenedor.innerHTML += "                                <div class=\"row\">\n" +
                "                                  <div class=\"col-4\">\n" +
                "                                    <div class=\"row\">\n" +
                "                                      <div class=\"col-4 text-right\" id=\"botton_RespuestaGenerar" + CommentId + "\"\n" +
                "                                               onclick=\"RespuestaGenerar(" + CommentId + ")\">\n" +
                "                                        <img src=\"../../img/flechabaja.png\" style=\"height: 25px; width: 25px;\"\n" +
                "                                             id=\"imagen-cambiante\" >\n" +
                "                                      </div>\n" +
                "                                      <div class=\"col-8\" id=\"botton_RespuestaGenerar" + CommentId + "\"\n" +
                "                                               onclick=\"RespuestaGenerar(" + CommentId + ")\">\n" +
                "                                        <span style=\"color: aquamarine; right: 25px\">Ver Respuestas</span>\n" +
                "                                      </div>\n" +
                "                                    </div>\n" +
                "                                  </div>\n" +
                "                                  <div class=\"col-8 text-right\">\n" +
                "                                    <span style=\"display:none;\" id=\"botton_cierre_respuestas" + CommentId + "\"\n" +
                "                                          onclick=\"CerrarRespuestas(" + CommentId + ")\">Cerrar Respuestas</span>\n" +
                "                                  </div>\n" +
                "\n" +
                "                                </div>\n";

        }
        /*----------BotonesDisplay------------------*/


        /*----------resultado_respuestas------------------*/
        fetch('https://bayiva2.herokuapp.com/Bayiva/api/respuestasA/all', {
            method: 'GET',
            //body:JSON(1)

        }).then(function(response) {
            if(response.ok) {
                return response.text()
                alert("Error en la llamada Ajax");

            } else {
                throw "Error en la llamada Ajax";
            }
        }).then(function (preguntas) {

            var arr = preguntas;

            var datos = JSON.parse(arr);

            var cajita = [];
            for (let item of datos) {
                cajita.push(item);
            }

            //console.log("-----------------Numero_Respuestas----------------------");
            Numero_Respuestas = cajita.length;
            //console.log(Numero_Respuestas);
            //console.log("------------------Numero_Respuestas---------------------");
        });
        /*----------resultado_respuestas------------------*/


        likesGeneradosComentarios();
        return container,Botton_VerRespuestas,Botton_CerrarRespuestas;
    });
};

function likesGeneradosComentarios(){

    /*----------Generar Likes------------------*/
    fetch('https://bayiva2.herokuapp.com/Bayiva/api/megustasComentarios/getByArticlesId/'+pair[1], {
        method: 'GET',
        //body:JSON(1)

    }).then(function(response) {
        if(response.ok) {
            return response.text()
            alert("Error en la llamada Ajax");

        } else {
            throw "Error en la llamada Ajax";
        }
    }).then(function (preguntas) {

        var arr = preguntas;

        var datos = JSON.parse(arr);

        var cajita = [];
        for (let item of datos) {

            cajita.push(item);
        }

        //console.log("----array----");
        for (var i = cajita.length - 1; i >= 0; i--) {

            //console.log(cajita[i]);
        }
        //console.log("----array----");

        //console.log("----Numero de cajita----");
        //console.log(cajita.length);

        for (var j = cajita.length - 1; j >= 0; j--) {
            var MiLikes = document.getElementById("MeGustasArticle" + cajita[j].commentsId);
            ////console.log(cajita[j].numberLikes);
            ////console.log(cajita[j].commentsId);
            //var span = document.createElement("span");
            MiLikes.innerHTML=cajita[j].numberLikes;

            //MiLikes.appendChild(span);
            /*
            if (cajita[j].commentsId==j){
                //console.log("Entro!");
            }
            */
        }
    });
}
