
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    console.pair;

}

var ArticleId= pair


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
    console.log(datos);




});





