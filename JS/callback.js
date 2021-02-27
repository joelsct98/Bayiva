
function Cambio(link, ArticleId) {
    //var boton = document.getElementById('id');
    //var ArticleId=boton.value;
    window.location=link+"?Id="+ArticleId;

    return false;
};


fetch('https://bayiva2.herokuapp.com/Bayiva/api/articles/all',{
    method: 'GET',
    headers:{
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2VsIiwiaWF0IjoxNjA4ODA1NzE1LCJleHAiOjE2MDg4NDE3MTV9.68Ymg-mjcPAHZY7D0f8ohxyPVZOwyV5kbp7YNtv8r90'
    }
}).then(function(response) {
    if(response.ok) {
        return response.text()
        alert("Error en la llamada Ajax");

    } else {
        throw "Error en la llamada Ajax";
    }
}).then(function (preguntas) {
    /*
        var nombreCues = document.getElementById("nombreCues");
        nombreCues.setAttribute("value",nombre);*/
    var arr=preguntas;
    ////console.log(arr);

    var datos = JSON.parse(arr);
    //console.log(datos);  //solo funciona este

    /*
        Podemos usar esto para poder filtrar solo 1
        o los q sean, pero en este caso no es nesesario ponerlo
        ----------------------------
        var newArr = datos.filter(function (el){
            return el.articleId===1
        });
        ----------------------------
        var newArr = datos.filter(function (el){
            return el
        });
        //console.log(newArr);
     */

    var cajita = [];
    for(let item of datos){
        /*
        -Lo puedo usar para coger solo un valor
        -del objeto en cuestion

        cajita.push(item.texto);
        //console.log(item.texto);
        */
        cajita.push(item);
        ////console.log(item);
    }
/*
    //console.log("----array----");
    for(var i= 0; i<=cajita.length-1; i++){

        //console.log(cajita[i]);
    }
    //console.log("----array----");

    var container = document.getElementById("prueba2");
    for(var i= 0; i<=cajita.length-1; i++){
        var divContenedor = document.createElement("div");
        divContenedor.setAttribute("class","row mb-4");
        divContenedor.setAttribute("id","articulo"+i);

        //las imagenes
        divContenedor.innerHTML+=cajita[i].imagesAS[0].url;

        //contenedor del contenido

        container.appendChild(divContenedor);

        /!*
            var divContenedorRow = document.createElement("div");
            divContenedorRow.setAttribute("class","row");

            divContenedorDentro.appendChild(divContenedorRow);
        *!/

    }

    for(var i= 0; i<=cajita.length-1; i++){
        var container = document.getElementById("articulo"+i);

        var divContenedorDentro = document.createElement("div");
        divContenedorDentro.setAttribute("class","col-12 col-md-6 col-lg-6");

        var divContenedorRow = document.createElement("div");
        divContenedorRow.setAttribute("class","row");
        divContenedorRow.setAttribute("id","row"+i);


        divContenedorDentro.appendChild(divContenedorRow);

        container.appendChild(divContenedorDentro);
    }

    for(var i= 0; i<=cajita.length-1; i++){
        var container = document.getElementById("row"+i);

        //console.log()
        container.innerHTML+=cajita[i].topic;
        container.innerHTML+=cajita[i].title;
        container.innerHTML+=cajita[i].description;
        container.innerHTML+=cajita[i].link;
    }*/
    /*
        for(var i= 0; i<=cajita.length-1; i++){
            var divContenedorRow = document.createElement("div");
            divContenedorRow.setAttribute("class","row");

            //las imagenes
            divContenedor.innerHTML+=cajita[i].imagesAS[0].url;

            //contenedor del contenido
            var divContenedorDentro = document.createElement("div");
            divContenedorDentro.setAttribute("class","col-12 col-md-6 col-lg-6");

            container.appendChild(divContenedor);
            container.appendChild(divContenedorDentro);

        }

    /*
        for(var i= 0; i<=cajita.length-1; i++){

            var divContenedorID = document.getElementById("articulo"+i);

            //var spanImg = document.createElement("span");

            //cajita[i].title.innerHTML;
            p1.innerHTML+=cajita[i].title;

            divContenedor.setAttribute("class","row mb-4");
            divContenedor.setAttribute("id","articulo"+i);


            divContenedorID.appendChild();
        }



        var ul = document.getElementById("myTab");
        var content = document.getElementById("myTabContent");
        for(var i= 1; i<=datos.length; i++){
            var li = document.createElement("li");
            li.setAttribute("class","nav-item");
            var a =document.createElement("a");

            if(i==1){
                a.setAttribute("class","nav-link active");
            }else{
                a.setAttribute("class","nav-link");
            }
            a.setAttribute("id","tab"+i);
            a.setAttribute("data-toggle","tab");
            a.setAttribute("href","#pregunta"+i);
            a.setAttribute("role","tab");
            ul.appendChild(li);
            li.appendChild(a);
            a.innerHTML+=i;

            var div= document.createElement("div");
            if(i == 1){
                div.setAttribute("class","tab-pane fade show active");
            }else{
                div.setAttribute("class","tab-pane fade");
            }
            div.setAttribute("id","pregunta"+i);
            div.setAttribute("role","tabpanel");
            content.appendChild(div);
        }

        /*

        //div marron
        var contenido
        for(var i= 1; i<=datos.length; i++){
            contenido = document.getElementById("pregunta"+i);

            var div2= document.createElement("div");

            div2.setAttribute("class","row");
            div2.setAttribute("id","body"+i);
            div2.setAttribute("style","background-color:#B79C5F;height:200px;border:1px solid #000000;");
            contenido.appendChild(div2);
        }

        //posicionamineto con divs
        var contenido2
        for(var i= 1; i<=datos.length; i++){
            contenido2 = document.getElementById("body"+i);

            var div3= document.createElement("div");
            var div4= document.createElement("div");

            div3.setAttribute("class","col-10");
            div3.setAttribute("id","col-10-"+i);
            div4.setAttribute("class","col-2");
            contenido2.appendChild(div3);
            contenido2.appendChild(div4);
        }


        //preguntas y opciones
        var contenido3
        for(var i= 1; i<=datos.length; i++){
            contenido3 = document.getElementById("col-10-"+i);

            var pregunta= document.createElement("span");

            pregunta.setAttribute("id","span"+i);
            pregunta.innerHTML+=cajita[i-1];

            contenido3.appendChild(pregunta);
        }

        fetch('https://bayiva2.herokuapp.com/rest/Opciones/getTodosOpciones', {
            method: 'GET',

        }).then(function(response) {
            if(response.ok) {
                return response.text()
                alert("Error en la llamada Ajax");

            } else {
                throw "Error en la llamada Ajax";
            }
        })
            .then(function (opciones) {
                var verdaderasOpciones=[];
                var cajitaCuestionariosId=[];
                var cajitaOpciones = [];
                var arrO=opciones;
                var datosO = JSON.parse(arrO);
                //console.log(datosO);
                var cont=0;
                var contInput=0;

                for(var i= 0; i<=datosO.length-1; i++){


                    var newArr = datosO.filter(function (el){
                        return el.preguntaId.preguntaId===i
                    });

                    for(let item2 of newArr){
                        cajitaOpciones.push(item2.texto);
                        //console.log(item2.texto);
                        //console.log(item2.preguntaId.cuestionarioId.titulo);
                        cajitaCuestionariosId.push(item2.preguntaId.cuestionarioId.titulo);
                        ////console.log(nombre);
                    }
                    //console.log("--------");

                }
    ////console.log(cajitaCuestionariosId.length);
                //console.log("--------------------------");

                for(var i= 0; i<=cajitaCuestionariosId.length-1; i++){
                    ////console.log(cajitaCuestionariosId[i]);

                    if(cajitaCuestionariosId[i]==nombre){
                        //console.log("-------verdaderos------");
                        verdaderasOpciones.push(cajitaOpciones[i]);
                    }

                }


                for(var i= 0; i<=verdaderasOpciones.length-1; i++){
                    //console.log(verdaderasOpciones[i]);
                }

                var supercont=0;
                for(var i= 1; i<=datos.length; i++){
                    var cajitaOpciones = [];

                    var newArr = datosO.filter(function (el){
                        return el.preguntaId.preguntaId===i
                    });

                    for(let item2 of newArr){
                        cajitaOpciones.push(item2.texto);
                        //console.log(item2.texto);
                        //console.log(item2.preguntaId.cuestionarioId.cuestionarioId);
                        cajitaCuestionariosId.push(item2.texto);
                    }
                    //console.log("--------");


                    var contenido4 = document.getElementById("col-10-"+i);

                    for(var j= 1; j<=cajitaOpciones.length; j++){

                        var divContenedor= document.createElement("div");
                        cont=cont+1;
                        divContenedor.setAttribute("class","form-check");
                        divContenedor.setAttribute("id","form-check-"+cont);
                        contenido4.appendChild(divContenedor);
                    }

                    var contenido5
                    var nameOpciones="blankRadio";
                    for(var j= 0; j<=cajitaOpciones.length-1; j++){
                        contInput=contInput+1;
                        var contenido5 = document.getElementById("form-check-"+contInput);

                        var input= document.createElement("input");

                        input.setAttribute("class","form-check-input position-static");
                        input.setAttribute("type","radio");
                        input.setAttribute("name",nameOpciones+i);
                        input.setAttribute("id",nameOpciones+contInput);
                        input.setAttribute("value",verdaderasOpciones[supercont]);

                        //label nombres dentro
                        var label= document.createElement("label");

                        label.setAttribute("class","form-check-label");
                        label.setAttribute("for",nameOpciones+contInput);
                        label.innerHTML+="&nbsp;"+verdaderasOpciones[supercont];

                        contenido5.appendChild(input);
                        contenido5.appendChild(label);
                        supercont++;
                    }
                }
            });*/
});
