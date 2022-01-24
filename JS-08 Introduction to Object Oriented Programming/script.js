class Person{
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    Describe(){
        return this._name + " , " + this._age + " years old";
    }
}
/*
getName = prompt("What is your name?");
getAge = parseInt(prompt("How old are you?"));
*/


//document.getElementById("id").innerHTML = myName.Describe();


function add(){
    getName = document.getElementById("name").value;
    getAge = document.getElementById("age").value;
    let myName= new Person(getName,getAge);

    var x = document.createElement("li");
    var t = document.createTextNode(myName.Describe());
    x.appendChild(t);
    document.querySelector("#container ol").appendChild(x);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("name").focus;
}
