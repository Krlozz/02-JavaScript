console.log('Hola Mundo!');

var mutar;
var nombre='carlos';
mutar = nombre;
var edad = 22;
mutar = edad;
var deudas = 23123.4576;
var fechaNacimiento = new Date();
var casado = false;
var estoyVacio = null;
var noEstoyDefinido = undefined;
//null undefined 0 -1 1
//-1 -> true  0 -> false  1 -> verdadero
if(estoyVacio){
    console.log('Verdadero');
}else{
    console.log('Falso');
}

//Json
// ctrl + a = seleccionar
// ctrl + alt + l = formatear
var usuarioTipo = {
    nombre:"Carlos",
    apellido:'Ayala',
    edad:sumarDosNumeros(14,14),
    imprimirEnConsola: sumarDosNumeros

    //    function () {
    //    console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad)
    //}
};

console.log(usuarioTipo.nombre); //Carlos
console.log(usuarioTipo); ///
delete usuarioTipo.edad;
console.log(usuarioTipo);
usuarioTipo.cedula=1720647914;
console.log(usuarioTipo);
usuarioTipo.mascota = {};
usuarioTipo.mascota.nombre='Cachetes';

console.log(usuarioTipo);
console.log('-----');
console.log(typeof nombre); //string
console.log(typeof edad); //number
console.log(typeof casado); //bolean
console.log(typeof fechaNacimiento); //object
console.log(typeof usuarioTipo); //object
//no se puede definir nombre en undefined



function sumarDosNumeros(numeroUno,numeroDos){
    return numeroUno + numeroDos;
}

console.log(sumarDosNumeros(1,2));

// funcion anonima
var sumarDosNumerosVersionDos = function (nummeroUno,numeroDos) {
    return nummeroUno + numeroDos;
}
console.log(sumarDosNumerosVersionDos(1,6))
var sumarDosNumerosVersionTres = function noImportaQueTengaNombre(nummeroUno,numeroDos) {
    return nummeroUno + numeroDos;
}
console.log(sumarDosNumerosVersionTres(2,3))

usuarioTipo.imprimirEnConsola(1,9);
mutar = sumarDosNumeros;
console.log(usuarioTipo.imprimirEnConsola)