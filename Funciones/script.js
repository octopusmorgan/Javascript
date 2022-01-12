/*
//Exercise-1
transaction = parseInt(prompt("Cuantas transactionsacciones hiciste ?"));
total = parseInt(prompt("Monto total?"));

function cost(transaction, total) {
    var comision = transaction * 3;
    console.log("Numero de transactionsacciones " + transaction + " * $3 = " + comision);
    var sum = total + comision;
    console.log("Monto : " + total + " + " + comision + " = " + sum);
    var fee = sum * 0.01;
    console.log("Intereses = " + fee);
    console.log("Total = " + (sum + fee));
}

cost(transaction, total);

//Exercise-2
//Part-1
var nombre1 = prompt("Escribe el nombre de tu primer de tu amigo:");
var nombre2 = prompt("Escribe el nombre de tu segundo de tu amigo:");
var nombre3 = prompt("Escribe el nombre de tu tercer de tu amigo:");
ejercicio2Parte1(nombre1, nombre2, nombre3);

function ejercicio2Parte1(nom1, nom2, nom3) {
    console.log("Bienvenido " + nom1 + ", " + nom2 + ", " + nom3);
    return;
};

//Part-2
function ejercicio2Parte2 (){ 
    const fecha = new Date(); 
    const añoActual = fecha.getFullYear(); 
    console.log(añoActual);
    // Devuelve la fecha actual 
    var nacimiento = prompt("¿En qué año naciste?");
    //Almacena elaño de nacimiento 
    años = añoActual - nacimiento;
    //Diferencia de fechas 
    alert("Tu año de nacimiento es: "+nacimiento+" y tienes: "+años+" años");
}; 
ejercicio2Parte2(); 

//Part-3

var edad1 = prompt("Cuantos años tiene " + nombre1 + "?");
var edad2 = prompt("Cuantos años tiene "+ nombre2 + "?");
var edad3 = prompt("Cuantos años tiene " + nombre3 + "?");
function ejerciocio3(){

    console.log("Welcome : " + nombre1 + " your age : " + edad1);

    console.log("Welcome : " + nombre2 + " your age : " + edad2);

    console.log("Welcome : " + nombre3 + " your age : " + edad3);
}
ejerciocio3();
*/
//Challenge yourself

//Part-1

var rubrica = parseInt(prompt("Rubrica : "));

function pass() {
    if (rubrica >= 5) 
        return true;
    else 
        return false;
}

console.log(pass());

//Part-2

function excellent(val) {
    if (val > 8 && val < 11) 
    console.log("Excellent");
}

excellent(rubrica);

//Part-3

function perfect(val) {
    if (rubrica == 11) 
    console.log("Perfect");
}
perfect(rubrica);


//Another Option
var rubrica = parseInt(prompt("Rubrica: "));
function pass() {
  if (rubrica == 11) {
    console.log("Perfect");
  } else if (rubrica > 8) {
    console.log("Excellent");
  } else if (rubrica >= 5) {
    console.log(true);
  }
}
pass(); 