
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    console.pair;

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
    var Usuario = document.getElementById('identityMenu');
    console.log("User: "+Usuario.value);

    var resul = document.getElementById('validationTextarea');
    console.log("Contenido: "+resul.value);

    var d = new Date();
    console.log(d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear());
    console.log(d.getHours()+":"+d.getMinutes());
    console.log(NumeroComentarios+1);


    var IdActual=pair[1];
    fetch('http://localhost:8080/Bayiva/api/comentariosA/save', {
        method: 'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify({
            "commentsAId": NumeroComentarios+1,
            "articleId": IdActual,
            "user": Usuario.value,
            "date":d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate(),
            "hour": d.getHours()+":"+d.getMinutes(),
            "description": resul.value,
            "articles": articles

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
        //console.log(arr);

        var datos = JSON.parse(arr);
        //console.log(datos);
    });

    return resul;
};


function RespuestaGenerar(){
    /*-----------------Cambio del display------------------*/

    var resul = document.getElementById('resultado_respuestas');
    var resul_cierre = document.getElementById('botton_cierre_respuestas');


    resul.setAttribute("style","display:block;");
    resul_cierre.setAttribute("style","display:block;color: aquamarine; right: 25px;");

    return resul,resul_cierre;
    /*-----------------Cambio del display------------------*/


    /*-----------------generando el contenido------------------*/

    fetch('http://localhost:8080/Bayiva/api/comentariosA/getByArticleId/'+pair[1], {
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
        //console.log(arr);

        var datos = JSON.parse(arr);
        //console.log(datos);

        var cajita = [];
        for(let item of datos){
            /*
            -Lo puedo usar para coger solo un valor
            -del objeto en cuestion

            cajita.push(item.texto);
            console.log(item.texto);
            */
            cajita.push(item);
            //console.log(item);
        }

    });

};


function CerrarRespuestas(){

    var resul = document.getElementById('resultado_respuestas');
    var resul_cierre = document.getElementById('botton_cierre_respuestas');


    resul.setAttribute("style","display:none;");
    resul_cierre.setAttribute("style","display:none;color: aquamarine; right: 25px;");

    //resul.style.display = "block";
    //var ArticleId=boton.value;
    //window.location=link+"?Id="+ArticleId;
    return resul,resul_cierre;
};



/*-----------------botones comentarios------------------*/


fetch('http://localhost:8080/Bayiva/api/articles/getByArticlesId/'+pair[1], {
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
    //console.log(arr);

    var datos = JSON.parse(arr);
    console.log(datos);


    var cajita = [];
    for(let item of datos){
        cajita.push(item);
    }
/*
    console.log("----arrayCajita----");
    for(var i= cajita.length-1; i>=0; i--){

        console.log(cajita[i]);
    }
    console.log("----arrayCajita----");
*/
    /*
    title=cajita[0].title;
    topic=cajita[0].topic;
    description=cajita[0].description;
    greatdescription=cajita[0].greatdescription;
    link=cajita[0].link;
    imagesAS=cajita[0].imagesAS;
    /*
    imagesASId=cajita[0].imagesAS.articleId;
    imagesASId=cajita[0].imagesAS.url;
    commentsAS=cajita[0].commentsAS;
    console.log("---------------------------------------");
    console.log(imagesAS);
    console.log("---------------------------------------");
*/
});



fetch('http://localhost:8080/Bayiva/api/comentariosA/getByArticleId/'+pair[1], {
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
    //console.log(arr);

    var datos = JSON.parse(arr);
    //console.log(datos);

    var cajita = [];
    for(let item of datos){
        /*
        -Lo puedo usar para coger solo un valor
        -del objeto en cuestion

        cajita.push(item.texto);
        console.log(item.texto);
        */
        cajita.push(item);
        //console.log(item);
    }

    console.log("---------------------------------------");
    articles=cajita[0].articles;

    //console.log(articles);
    console.log("---------------------------------------");


    NumeroComentarios=cajita.length;

    console.log("----array----");
    for(var i= cajita.length-1; i>=0; i--){

        console.log(cajita[i]);
    }


    console.log("----array----");

    var container = document.getElementById("PosicionarComentarios");
    for(var i= cajita.length-1; i>=0; i--){
        var divContenedor = document.createElement("div");
        divContenedor.setAttribute("class","mt-3 mb-2");
        divContenedor.setAttribute("id","comentarios"+i);

        /*-------------------separacion--------------------*/
        divContenedor.innerHTML+="<h3></h3>"

        //contenedor del contenido

        container.appendChild(divContenedor);

    }

    for(var i= cajita.length-1; i>=0; i--){
        var Contenedor = document.getElementById("comentarios"+i);

        var divContenedor = document.createElement("div");
        divContenedor.setAttribute("class","row");
        divContenedor.setAttribute("id","row"+i);


        var TextAreaEscondido = document.createElement("div");
        TextAreaEscondido.setAttribute("style","display:none;");
        TextAreaEscondido.setAttribute("id","resultado_text"+i);
        TextAreaEscondido.setAttribute("class","mt-2");

        //divContenedor.innerHTML+=cajita[i].imagesAS[0].url;

        //contenedor del contenido

        Contenedor.appendChild(divContenedor);
        Contenedor.appendChild(TextAreaEscondido);
    }

    for(var i= cajita.length-1; i>=0; i--){
        var ContenedorRow = document.getElementById("row"+i);

        x=0;
        /*-----------------*/
        var divContenedor1 = document.createElement("div");
        divContenedor1.setAttribute("class","col-8");
        divContenedor1.setAttribute("id","row"+i+"-"+x++);
        /*-----------------*/
        var divContenedor2 = document.createElement("div");
        divContenedor2.setAttribute("class","col-4 text-right");
        divContenedor2.setAttribute("id","row"+i+"-"+x++);
        /*-----------------*/
        var divContenedor3 = document.createElement("div");
        divContenedor3.setAttribute("class","col-12 mb-2");
        divContenedor3.setAttribute("id","row"+i+"-"+x++);
        /*-----------------*/
        var divContenedor4 = document.createElement("div");
        divContenedor4.setAttribute("class","col-8");
        divContenedor4.setAttribute("id","row"+i+"-"+x++);
        /*-----------------*/
        var divContenedor5 = document.createElement("div");
        divContenedor5.setAttribute("class","col-4 text-right");
        divContenedor5.setAttribute("id","row"+i+"-"+x++);

        //divContenedor.innerHTML+=cajita[i].imagesAS[0].url;

        //contenedor del contenido

        ContenedorRow.appendChild(divContenedor1);
        ContenedorRow.appendChild(divContenedor2);
        ContenedorRow.appendChild(divContenedor3);
        ContenedorRow.appendChild(divContenedor4);
        ContenedorRow.appendChild(divContenedor5);
    }


    /*----------------comentarios-----------------------*/

    for(var i= cajita.length-1; i>=0; i--){
        var Contenedor = document.getElementById("row"+i+"-"+0);


        /*----Usuario-----*/
        var divContenedor = document.createElement("span");
        divContenedor.setAttribute("id","usuario");


        /*----hora-----*/
        var divContenedorUser = document.createElement("span");
        divContenedorUser.setAttribute("id","hora");

        divContenedor.innerHTML+=cajita[i].user+"&nbsp&nbsp";
        divContenedorUser.innerHTML+=cajita[i].hour;

        //contenedor del contenido
        Contenedor.appendChild(divContenedor);
        Contenedor.appendChild(divContenedorUser);
    }

    for(var i= cajita.length-1; i>=0; i--){
        var Contenedor = document.getElementById("row"+i+"-"+1);

        var divContenedor = document.createElement("span");
        divContenedor.setAttribute("id","fecha");

        divContenedor.innerHTML+=cajita[i].date;

        //contenedor del contenido

        Contenedor.appendChild(divContenedor);

    }

    for(var i= cajita.length-1; i>=0; i--){
        var Contenedor = document.getElementById("row"+i+"-"+2);

        var divContenedor = document.createElement("span");
        divContenedor.setAttribute("style","color: white");

        divContenedor.innerHTML+=cajita[i].description;

        //contenedor del contenido

        Contenedor.appendChild(divContenedor);

    }

    for(var i= cajita.length-1; i>=0; i--){
        var Contenedor = document.getElementById("row"+i+"-"+3);

        var divContenedor1 = document.createElement("input");
        divContenedor1.setAttribute("type","image");
        divContenedor1.setAttribute("style","height: 25px; width: 25px;");
        divContenedor1.setAttribute("alt","Login");
        divContenedor1.setAttribute("src","../../img/responder.png");
        divContenedor1.setAttribute("onclick","Responder("+i+")");

        var divContenedor2 = document.createElement("img");
        divContenedor2.setAttribute("src","../../img/corazonRojo.png");
        divContenedor2.setAttribute("id","imagen-cambiante");
        divContenedor2.setAttribute("onclick","Likes");


        var divContenedor3 = document.createElement("img");
        divContenedor3.setAttribute("src","../../img/corazon.png");
        divContenedor3.setAttribute("id","imagen-cambiante");
        divContenedor3.setAttribute("class","cambio");

        var divContenedor4 = document.createElement("div");
        divContenedor4.setAttribute("style","left: 70px; top: 1px;position: absolute");
        divContenedor4.setAttribute("id","resaltar");


        divContenedor4.innerHTML+=85;

        //contenedor del contenido

        Contenedor.appendChild(divContenedor1);
        Contenedor.appendChild(divContenedor2);
        Contenedor.appendChild(divContenedor3);
        Contenedor.appendChild(divContenedor4);

    }




    /*----------textareaEscondido------------------*/

    for(var i= cajita.length-1; i>=0; i--){
        var Contenedor = document.getElementById("resultado_text"+i);


        Contenedor.innerHTML+="                            <div class=\"row\">\n" +
            "                              <div class=\"col-12\">\n" +
            "                                <div class=\"row\">\n" +
            "                                  <div class=\"col-12\">\n" +
            "                                    <textarea class=\"form-control\" style=\"background-color: black; color: white;\"\n" +
            "                                           placeholder=\"AUN NO FUNCIONA\"></textarea>\n" +
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
            "                              <input type=\"text\" id=\"identityMenu\" list=\"lista_opciones\" />\n" +
            "\n" +
            "                              <datalist id=\"lista_opciones\" name=\"commet\" dir=\"ltr\">\n" +
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
            "                                        <button type=\"button\" id=\"Enviar\" class=\"btn btn-warning\" onclick=\"RespuestaGenerar("+i+")\">Comentar</button>\n" +
            "                                        <button type=\"button\" id=\"Enviar\" class=\"btn btn-warning\" onclick=\"Cerrar("+i+")\">Cerrar</button>\n" +
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





});













