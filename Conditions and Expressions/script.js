//Exercise #1

//Part-1
var names = ["Maria", "Antony", "Joy", "Juan"]

insertEnd();

names.forEach(element => {
    console.log(element);
});

//Part-2
console.log(checkName());

//Part-3
var names2 = ["Pedro","Maria","Rosa","Luis","Miguel"];

nameArray(names,names2);


nameLeght(names);


// num.forEach(element => {
//     console.log(element);
// });

function insertEnd(){
    names.push("Alonso");
}

function checkName(){
    let n = 0;
    for(let x=0;x<names.length;x++){
        if(names[x]=="Alonso"){
            n=1;
        }
    }
    if(n==1){
        return true
    }
    else
    {
        return false
    }
}

function nameArray(n1,n2){
    for(let i=0; i<n1.length; i++){
        for(let j=0; j<n2.length; j++){
            if(n1[i]==n2[j]){
                console.log(n1[i] + " " + n2[j]);
            }
        }
    }
}
function nameLeght(n1){
    var num = [];
    for(let i=0; i<n1.length; i++)
    {
        num.push(n1[i].length);
        console.log(n1[i]+ " " + num[i]);
    }
}


//Exercise #2

console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);

//Exercise #3

numberRange(25);   // '25 is between 0 and 25'
numberRange(75);   // '75 is between 26 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'

function numberRange(n){
    if(n>=0 && n<=25)
        console.log(n + " is between 0 and 25");
    else if(n>25 && n<=100)
    console.log(n + " is between 26 and 100");
    else if(n>100)
    console.log(n + " is greater than 100");
    else
    console.log(n + " is less than 0");
}

//Additional Exercises

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;
console.log(f); // Print 4