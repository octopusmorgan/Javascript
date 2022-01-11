function triangulo(){
    var base = 4;
    var altura =10;
    var res =(base*altura)/2;
    console.log("El area del triangulo es : " + res);
}

function circulo(){
    var radio = 4;
    var res =Math.PI*(Math.pow(radio,2));
    console.log("El area del circulo es : " + res);
}

function rectangulo(b,a){
    var res=b*a;
    alert("El area del rectangulo es : "+ res);
}

function areas(){
    triangulo();
    circulo();
    rectangulo(8,1);
}

areas();