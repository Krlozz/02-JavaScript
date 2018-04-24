var nombre = 'Carlos';
nombre = 'Antonio';
var cedula = '1720647914';
// cedula = '12213'; No hay como
var apellido = 'Ayala'; // duck Typing-> no es necesario  colocar el tipo de la variable
// si colocamos any podemos igualarlo a cualquier cosa
apellido = 1;
var edad = 1;
var casado = false;
var fechaNacimiento = new Date();
var usuario = {
    nombre: 'Carlos',
    edad: 22
};
var Usuario = /** @class */ (function () {
    function Usuario(mNombre, mEdad) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    Usuario.prototype.imprimirUsuario = function (saludo) {
        // template strings son posibilidad de poner variables al string
        return saludo + ". Mi nombre es: " + this.nombre + ", y mi edad es " + this.edad;
    };
    return Usuario;
}());
var carlos = new Usuario('Carlos', 22);
//console.log(carlos)
console.log(carlos.imprimirUsuario('Hola!'));
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _edad, esposo) {
        this.nombre = nombre;
        this._edad = _edad;
        this.esposo = esposo;
    }
    Object.defineProperty(UsuarioDos.prototype, "edad", {
        // get and set sirven para debuggear
        get: function () {
            return this._edad;
        },
        // sirve para válidar datos
        set: function (nuevaEdad) {
            // también cambiar los datos o transformarlos
            this._edad = nuevaEdad;
        },
        enumerable: true,
        configurable: true
    });
    return UsuarioDos;
}());
var antonio = new UsuarioDos('Antonio', 22);
console.log('antonio', antonio);
antonio.edad = 23;
var carlos2 = {
    nombre: 'Carlos2',
    edad: 18,
    esposa: new Usuario('Carla', 19)
};
console.log(carlos2);
