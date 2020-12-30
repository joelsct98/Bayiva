
fetch('http://localhost:8080/Bayiva/api/respuestasA/getByCommentId/'+1, {
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
    //console.log(arr);

    var datos = JSON.parse(arr);
    //console.log(datos);

    var cajita = [];
    for(let item of datos){

        //cajita.push(item.texto);
        //console.log(item.texto);

        cajita.push(item);
    }


    console.log("----array----");
    for(var i= cajita.length-1; i>=0; i--){

        console.log(cajita[i]);
    }

    var container = document.getElementById("resultado_respuestas");
    for(var i= cajita.length-1; i>=0; i--){
        var divContenedor = document.createElement("div");
        divContenedor.setAttribute("class","row");
        divContenedor.setAttribute("id","rowRespuestas"+i);

        /*-------------------separacion--------------------*/
        //divContenedor.innerHTML+="<h3></h3>"


        container.appendChild(divContenedor);

    }

    for(var i= cajita.length-1; i>=0; i--){
        var container = document.getElementById("rowRespuestas"+i);


        var divContenedor1 = document.createElement("div");
        divContenedor1.setAttribute("class","col-2");

        var divContenedor2 = document.createElement("div");
        divContenedor2.setAttribute("class","col-10");
        divContenedor2.setAttribute("id","colRespuestas"+i);


        /*-------------------separacion--------------------*/
        //divContenedor.innerHTML+="<h3></h3>"

        container.appendChild(divContenedor1);
        container.appendChild(divContenedor2);

    }

    for(var i= cajita.length-1; i>=0; i--){
        var container = document.getElementById("colRespuestas"+i);


        var divContenedor = document.createElement("div");
        divContenedor.setAttribute("class","row");
        divContenedor.setAttribute("id","rowRespuestasDentro"+i);


        container.appendChild(divContenedor);
    }

    for(var i= cajita.length-1; i>=0; i--){
        var ContenedorRow = document.getElementById("rowRespuestasDentro"+i);


        x=0;
        /*-----------------*/
        var divContenedor1 = document.createElement("div");
        divContenedor1.setAttribute("class","col-8");
        divContenedor1.setAttribute("id","rowR"+i+"-"+x++);
        /*-----------------*/
        var divContenedor2 = document.createElement("div");
        divContenedor2.setAttribute("class","col-4 text-right");
        divContenedor2.setAttribute("id","rowR"+i+"-"+x++);
        /*-----------------*/
        var divContenedor3 = document.createElement("div");
        divContenedor3.setAttribute("class","col-12 mb-2");
        divContenedor3.setAttribute("id","rowR"+i+"-"+x++);
        /*-----------------*/
        var divContenedor4 = document.createElement("div");
        divContenedor4.setAttribute("class","col-8");
        divContenedor4.setAttribute("id","rowR"+i+"-"+x++);
        /*-----------------*/
        var divContenedor5 = document.createElement("div");
        divContenedor5.setAttribute("class","col-4 text-right");
        divContenedor5.setAttribute("id","rowR"+i+"-"+x++);

        //divContenedor.innerHTML+=cajita[i].imagesAS[0].url;

        //contenedor del contenido

        ContenedorRow.appendChild(divContenedor1);
        ContenedorRow.appendChild(divContenedor2);
        ContenedorRow.appendChild(divContenedor3);
        ContenedorRow.appendChild(divContenedor4);
        ContenedorRow.appendChild(divContenedor5);
    }

    /*---------------------------respuestas-----------------*/

    for(var i= cajita.length-1; i>=0; i--){
        var Contenedor = document.getElementById("rowR"+i+"-"+0);


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
        var Contenedor = document.getElementById("rowR"+i+"-"+1);

        var divContenedor = document.createElement("span");
        divContenedor.setAttribute("id","fecha");

        divContenedor.innerHTML+=cajita[i].date;

        //contenedor del contenido

        Contenedor.appendChild(divContenedor);

    }

    for(var i= cajita.length-1; i>=0; i--){
        var Contenedor = document.getElementById("rowR"+i+"-"+2);

        var divContenedor = document.createElement("span");
        divContenedor.setAttribute("style","color: white");

        divContenedor.innerHTML+=cajita[i].description;

        //contenedor del contenido

        Contenedor.appendChild(divContenedor);

    }

    for(var i= cajita.length-1; i>=0; i--){
        var Contenedor = document.getElementById("rowR"+i+"-"+3);

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





    /*---------------------------respuestas-----------------*/




});