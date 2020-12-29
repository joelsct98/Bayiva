
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    console.pair;

}

var ArticleId= pair

/*-----------------botones comentarios------------------*/
function Responder() {
    var resul = document.getElementById('resultado_text');

    resul.setAttribute("style","display:block;");
    //resul.style.display = "block";
    //var ArticleId=boton.value;
    //window.location=link+"?Id="+ArticleId;
    return resul;
};

function Cerrar() {
    var resul = document.getElementById('resultado_text');

    resul.setAttribute("style","display:none;background-color: black; color: white;");
    //resul.style.display = "block";
    //var ArticleId=boton.value;
    //window.location=link+"?Id="+ArticleId;
    return resul;
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

    /*
    var cajita = [];
    for(let item of datos){
        cajita.push(item.commentsAS);
    }

    console.log("----arrayCajita----");
    for(var i= 0; i<=cajita.length-1; i++){

        console.log(cajita[i]);
    }
    console.log("----arrayCajita----");

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

    console.log("----array----");
    for(var i= 0; i<=cajita.length-1; i++){

        console.log(cajita[i]);
    }
    console.log("----array----");

    var container = document.getElementById("PosicionarComentarios");
    for(var i= 0; i<=cajita.length-1; i++){
        var divContenedor = document.createElement("div");
        divContenedor.setAttribute("class","mt-3 mb-2");
        divContenedor.setAttribute("id","comentarios"+i);

        divContenedor.innerHTML+=<h3></h3>

        //contenedor del contenido

        container.appendChild(divContenedor);

    }

    for(var i= 0; i<=cajita.length-1; i++){
        var divContenedor = document.createElement("div");
        divContenedor.setAttribute("class","mt-3 mb-2");
        divContenedor.setAttribute("id","comentarios"+i);

        divContenedor.innerHTML+=cajita[i].imagesAS[0].url;

        //contenedor del contenido

        container.appendChild(divContenedor);

    }






});













