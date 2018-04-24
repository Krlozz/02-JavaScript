let nombre: String = 'Carlos';
nombre = 'Antonio';

const cedula = '1720647914';
// cedula = '12213'; No hay como

let apellido: any = 'Ayala';  // duck Typing-> no es necesario  colocar el tipo de la variable
                              // si colocamos any podemos igualarlo a cualquier cosa
apellido = 1;

let edad:number = 1;
let casado:boolean = false;
let fechaNacimiento:Date = new Date();

let usuario = {        // tipo de objeto
    nombre: 'Carlos',
    edad: 22
}

class Usuario {
    nombre:String; // por defecto es public
    private edad: number;
    constructor(mNombre:string, mEdad:number) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }

    public imprimirUsuario(saludo: string):string {
        // template strings son posibilidad de poner variables al string
        return `${saludo}. Mi nombre es: ${this.nombre}, y mi edad es ${this.edad}`;
    }
}


let carlos = new Usuario('Carlos',22);
//console.log(carlos)
console.log(carlos.imprimirUsuario('Hola!'));

class UsuarioDos { // se debe colocar los modificadores de acceso, sino no se guardan como propiedad
    constructor(public nombre:string,private _edad:number, public esposo?:UsuarioDos){   // colocar ? despues de una variable hago que esta variable sea opcional
    }

    // get and set sirven para debuggear
    get edad():number {
        return this._edad;
    }
    // sirve para válidar datos
    set edad(nuevaEdad: number) {
        // también cambiar los datos o transformarlos
        this._edad = nuevaEdad;
    }
}

let antonio = new UsuarioDos('Antonio',22);
console.log('antonio', antonio);

antonio.edad = 23;

interface UsuarioTres {    // interface no solo para implementar clases sino también sirven para tipar
    nombre:string;
    edad:number;
    esposa: Usuario
}

let carlos2:UsuarioTres = {
    nombre: 'Carlos2',
    edad: 18,
    esposa: new Usuario('Carla', 19)
}

console.log(carlos2)