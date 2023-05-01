/*- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:

mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada 
y cual es el rasgo característico de esta generación.

Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.

mostrarDatos: devuelve toda la información del objeto.

generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioDeNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = this.generaDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioDeNacimiento = anioDeNacimiento;
    }
    
    mostrarGeneracion(){
        if(this.anioDeNacimiento<= 2010 && this.anioDeNacimiento>=1994){
            console.log(`La generacion de esta persona es Generacion Z y su rasgo caracteristico es la irreverencia`);
        }if(this.anioDeNacimiento<= 1993 && this.anioDeNacimiento>=1981){
            console.log(`La generacion de esta persona es Generacion Y o Millenials y su rasgo caracteristico es la Frustración`);
        }if(this.anioDeNacimiento<= 1980 && this.anioDeNacimiento>=1969){
            console.log(`La generacion de esta persona es Generacion X y su rasgo caracteristico es la Obsesión por el exito`);
        }if(this.anioDeNacimiento<= 1968 && this.anioDeNacimiento>=1949){
            console.log(`La generacion de esta persona es Baby boom y su rasgo caracteristico es la Ambición`);
        }if(this.anioDeNacimiento<= 1948 && this.anioDeNacimiento>=1930){
            console.log(`La generacion de esta persona es Silent Generation o Los niños de la posguerra y su rasgo caracteristico es la Austeridad`);
        }if(this.anioDeNacimiento<1930 || this.anioDeNacimiento>2010){
            console.log('No tenemos nombre de la generacion y ni rasgo de la persona que nos acaba de indicar');
        }
    }
    
    esMayorDeEdad(){
        if(this.edad>=18){
            console.log(`La persona ${this.nombre} es mayor de edad`);
        }else{
            console.log(`La persona ${this.nombre} es menor de edad`);
        }
    }
    mostrarDatos(){
        console.log(`El nombre de la persona es ${this.nombre}\nLa edad de la persona es ${this.edad}\nEl sexo de la persona es ${this.sexo}\nEl DNI de la persona es ${this.DNI}\nEl peso de la persona es ${this.peso}\nLa altura de la persona es${this.altura}\nEl año de nacimiento de la persona es ${this.anioDeNacimiento}\n
        `);
    }
    generaDNI(){
        this.DNI= Math.floor(Math.random()*10000000);
        return this.DNI;
    }
}

const omar = new Persona('Omar', 23,"M", 100,2,2000 )
const mauro = new Persona('Mauro', 30,"M", 110, 1.75, 1992);
const cecilia = new Persona('Cecilia',54,"F", 55, 1.56, 1969 );
const paula = new Persona('Paula', 64,"F", 60, 1.6, 1959);
const emanuel = new Persona('Emanuel', 88, "M", 80, 1.75, 1935);
const tomas = new Persona ('Tomas', 1 ,"M", 20, 1 , 2022);
