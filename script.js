class Jugador {

  constructor(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.ph = 100;
    this.probExito = 65;
    this.estado = true;
  }

  curar() {
    this.pv += 40;
    this.ph -= 20;
  }
  descansar() {
    this.ph += 40;
  }


  atacar(objetivo) {
    if (this.estado) {
      if (objetivo.estado) {
        if (this.ph > 20) {
          this.ph -= 20;
          var probRandom = Math.round(Math.random() * 1000)
          if (probRandom < (this.probExito * 10)) {
            console.log("Ataque exitoso");
            objetivo.pv -= 20;
            if (objetivo.pv <= 0) {

              objetivo.estado = false;
              console.log("EL ENEMIGO HA MUERTO");
            }


          } else {
            console.log("FALLO EL ATAQUE");
          }
        } else {
          console.log("NO DISPONES DE ENERGIA, SE REGENERARA");
          console.log("TURNO DEL ENEMIGO");
          this.ph += 40;
        }
      } else {
        console.log("EL ENEMIGO YA ESTA MUERTO");
      }
    } else {
      console.log("NO PUEDES ATACAR PORQUE YA ESTAS MUERTO");
    }
  }





}



var legolas = new Jugador("Legolas");
var ogro = new Jugador("Ogro");

console.log("PUEDES ATACAR,CURARTE O DESCANSAR");
console.log("ejemplo : legolas.atacar(ogro)");
console.log("ejemplo : legolas.curar()");
console.log("ejemplo : legolas.descansar()");


// class Persona {
//   constructor(pila,apellido,edad,genero,intereses) {
//     this.nombre = {
//       pila,
//       apellido,
//     };
//     this.edad = edad;
//     this.genero = genero;
//     this.intereses = intereses;
//   }
//
//   saludo(){
//     console.log("Hola, mi nombre es "+ this.nombre.pila + " "+this.nombre.apellido);
//   };
//
//   despedida(){
//     console.log(this.nombre.pila + " ha dejado el edificio. Nos vemos luego");
//   }
// }