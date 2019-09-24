let url1 = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=b73c7493bffe7ffb6d8373e24dd12315&limit=10&format=json"

document.querySelector('#dolar1').addEventListener('click', function () {
  obtener_datos();
  //correr_datos(datos);
});


function obtener_datos() {
  let datos;
  fetch(url1)
    .then(function (res) {
      return (res.json()); // HACE LA CONEXION Y DECIMOS COMO DEVUELVE LOS DATOS
    })
    .then(function (data) { // EN ESTE CASO EN FORMATO JSON

      datos = data.artists.artist;
      /*       console.log("DATOS DENTRO DE LA FUNCION");
            console.log(datos); //el objeto html1 contiene un item de una lista, que despliega el nombre del artista */

    }).then(function () {
      correr_datos(datos);
    }); //al parrafo creado en html, le pasamos el item de la lista del objeto que creamos llamado html1

}

function correr_datos(lista) {
  for (var i = 0; i < lista.length; i++) {
    console.log("TOP " + (i + 1));
    console.log(lista[i].name + " |Reproducciones: " + lista[i].playcount + " |Oyentes: " + lista[i].listeners);
  }
}