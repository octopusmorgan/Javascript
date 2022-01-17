//Exercise #1

//Part-1

var names = ["Sofia","David","Juan"];

for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
console.log("");
//Part-2

names.push("Sara","Agustin");
names.unshift();

for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
console.log("");
//Part-3

names.shift();
names.unshift("Sofia","Renata");
names.push("Elena");
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
console.log("");

//Exercise #2

var cadena = ""; 
for(let i=0;i<=5;i++){
    for(let j=0;j<i;j++){
        cadena += "*";
    } 
    cadena += "\n"
}

console.log(cadena);

//Exercise #3

var x = 5;
var aux = 0;
while(x>0){
    x-=0.5;
    aux=x;
    console.log(aux)
    
}
console.log("");

var number = 0; 
while(number<100){
    number++;
    console.log(number);
    number++;
}

console.log("");

var n = 0
while(n<5){
    n++;
    console.log("[" + n + "]");
}

console.log("");

var n=0;
var aux=5;
var i=0;
while(n<aux){
    n++;
    i+=n;
}
console.log("n = " + aux );
console.log("sum = " + i );