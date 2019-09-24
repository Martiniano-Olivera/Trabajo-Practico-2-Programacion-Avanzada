function auto(marca,modelo,precio) {
    this.marca=marca;
    this.modelo=modelo;
    this.precio=precio;
}

var auto1 = new auto('Toyota','Etios',3000);
var auto2 = new auto('Renault','Capture',10000);
var auto3 = new auto('Peugeot','308',5000);
var auto4 = new auto('Peugeot','3008',8000);

function iva(auto) {
    precio = auto.precio;
    impuesto = (precio*21)/100;
    return impuesto;
}

cadena = `El auto ${auto1.marca} ${auto1.modelo} vale ${auto1.precio} dolares y el iva es $` + iva(auto1);
document.write(cadena + "<br>");
cadena = `El auto ${auto2.marca} ${auto2.modelo} vale ${auto2.precio} dolares y el iva es $` + iva(auto2);
document.write(cadena + "<br>");
cadena = `El auto ${auto3.marca} ${auto3.modelo} vale ${auto3.precio} dolares y el iva es $` + iva(auto3);
document.write(cadena + "<br>");
cadena = `El auto ${auto4.marca} ${auto4.modelo} vale ${auto4.precio} dolares y el iva es $` + iva(auto4);
document.write(cadena + "<br>");