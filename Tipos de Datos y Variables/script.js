// Part 1: Type Converter

/*var valor = false;
compare(valor);

var valor = true;
compare(valor);

var valor = 0;
compare(valor);

var valor = 1;
compare(valor);

var valor = "0";
compare(valor);

var valor = "000";
compare(valor);

var valor = "1";
compare(valor);

var valor = NaN;
compare(valor);

var valor = Infinity;
compare(valor);

var valor = -Infinity;
compare(valor);

var valor = "";
compare(valor);

var valor = "20";
compare(valor);

var valor = "Twenty";
compare(valor);

var valor = null;
compare(valor);

var valor = undefined;
compare(valor);




function compare(valor){
    console.log(Number(valor));

    console.log(String(valor));

    console.log(Boolean(valor));
}

//Calculadora de Edad

function edad(){
    var nac = [0,0,0], fut =[0,0,0];
    /*nac arreglo que contiene la fecha de nacimiento.
    fut arrgelo que contiene una fecha futura.
    Indice 0 => día, 1 => mes, 2 => año.*/ 
    nac[0] = prompt("¿Qué día naciste?");
    nac[1] = prompt("¿Qué mes naciste?");
    nac[2] = prompt("¿Qué año naciste?");
    /*Se ingresa los datos de nacimiento día, mes, año */
    fut[0] = prompt("Ingresa una día");
    fut[1] = prompt("Ingresa un mes");
    fut[2] = prompt("Ingresa un año");
    /*Se ingresa la fecha deseada día, mes, año*/
    /*Sólo admite datos numéricos, tanto de día, mes y año. Tampoco valida si las fechas son correctas de acuerdo al calendario, así como tampoco valida los años bisiestos.*/ 
    console.log(nac); console.log(fut);
    //Visualización de las fechas por consola
    dia = nac[0]-fut[0];
    mes = nac[1]-fut[1];
    año = fut[2]-nac[2];
    //Difereccia de fechas
    if(mes<0 || (mes==0 && dia<=0)){ 
        alert("Años cumplidos "+(año));
        /*Si es o ya fue su cumpleaños. No se ajustan los años*/
    }else{
        alert("Años cumplidos "+(año-1));
        /*Si la fecha de cumpleaños, aun no llega. Se ajustan los años*/
    }
}

edad();//llamada de la función


*/
// Challenge 2: Create an information card
var person = {
    name: "Juan",
    location: "Mexico",
    hobby: "Music"
};

console.log("Hi my name is " + person.name + ". I live in " + person.location + " and enjoy " + person.hobby);
